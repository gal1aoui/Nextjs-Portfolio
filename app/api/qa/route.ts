import OpenAI from "openai";

import { isLanguage, type AppLanguage } from "@/i18n/settings";
import { buildSystemPrompt } from "@/lib/qa/knowledge";
import { checkRateLimit } from "@/lib/qa/rate-limit";

export const maxDuration = 30;

const NIM_BASE_URL = "https://integrate.api.nvidia.com/v1";
const QA_MODEL = "nvidia/nemotron-3-nano-30b-a3b";
const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_ITEMS = 12;
const MAX_HISTORY_ITEM_LENGTH = 1000;
// max_tokens caps reasoning (<think>) + visible answer together, so it must
// comfortably exceed the reasoning budget or answers stream back empty.
const MAX_OUTPUT_TOKENS = 2048;
const REASONING_BUDGET = 1024;

interface QaHistoryItem {
  role: "user" | "assistant";
  content: string;
}

interface QaRequest {
  message: string;
  language: AppLanguage;
  history: QaHistoryItem[];
}

function parseRequest(payload: unknown): QaRequest | null {
  if (typeof payload !== "object" || payload === null) return null;

  const { message, language, history } = payload as Record<string, unknown>;

  if (
    typeof message !== "string" ||
    message.trim().length === 0 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return null;
  }

  if (typeof language !== "string" || !isLanguage(language)) {
    return null;
  }

  if (!Array.isArray(history)) return null;

  const sanitizedHistory: QaHistoryItem[] = [];

  for (const item of history.slice(-MAX_HISTORY_ITEMS)) {
    if (typeof item !== "object" || item === null) return null;

    const { role, content } = item as Record<string, unknown>;

    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;

    sanitizedHistory.push({
      role,
      content: content.slice(0, MAX_HISTORY_ITEM_LENGTH),
    });
  }

  return { message: message.trim(), language, history: sanitizedHistory };
}

/**
 * Strips <think>…</think> reasoning blocks from a streamed response, handling
 * tags split across chunk boundaries.
 */
function createThinkFilter() {
  let inside = false;
  let carry = "";

  const partialTagSuffix = (text: string, tag: string) => {
    const max = Math.min(text.length, tag.length - 1);

    for (let length = max; length > 0; length--) {
      if (tag.startsWith(text.slice(text.length - length))) {
        return text.slice(text.length - length);
      }
    }

    return "";
  };

  const process = (chunk: string): string => {
    let text = carry + chunk;

    carry = "";
    let output = "";

    while (text.length > 0) {
      if (inside) {
        const closeIndex = text.indexOf("</think>");

        if (closeIndex === -1) {
          carry = partialTagSuffix(text, "</think>");

          return output;
        }

        text = text.slice(closeIndex + "</think>".length);
        inside = false;
      } else {
        const openIndex = text.indexOf("<think>");

        if (openIndex === -1) {
          const partial = partialTagSuffix(text, "<think>");

          output += text.slice(0, text.length - partial.length);
          carry = partial;

          return output;
        }

        output += text.slice(0, openIndex);
        text = text.slice(openIndex + "<think>".length);
        inside = true;
      }
    }

    return output;
  };

  // At stream end a withheld "<"-prefix carry is legitimate answer text.
  const flush = (): string => {
    const leftover = inside ? "" : carry;

    carry = "";

    return leftover;
  };

  return { process, flush };
}

export async function GET() {
  return Response.json({ aiEnabled: Boolean(process.env.NVIDIA_API_KEY) });
}

export async function POST(req: Request) {
  if (!process.env.NVIDIA_API_KEY) {
    return Response.json({ error: "ai_unavailable" }, { status: 503 });
  }

  let payload: unknown;

  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const request = parseRequest(payload);

  if (!request) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const clientIp = (req.headers.get("x-forwarded-for") ?? "unknown")
    .split(",")[0]
    .trim();

  if (!checkRateLimit(clientIp)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const nim = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: NIM_BASE_URL,
  });

  const params: OpenAI.Chat.Completions.ChatCompletionCreateParamsStreaming = {
    model: QA_MODEL,
    messages: [
      { role: "system", content: buildSystemPrompt(request.language) },
      ...request.history,
      { role: "user", content: request.message },
    ],
    temperature: 1,
    top_p: 1,
    max_tokens: MAX_OUTPUT_TOKENS,
    stream: true,
  };

  try {
    const completion = await nim.chat.completions.create(
      // reasoning_budget is an NVIDIA NIM extension not covered by the
      // OpenAI SDK types.
      { ...params, reasoning_budget: REASONING_BUDGET } as typeof params,
      { signal: req.signal },
    );

    const encoder = new TextEncoder();
    const thinkFilter = createThinkFilter();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const text = thinkFilter.process(
              chunk.choices[0]?.delta?.content ?? "",
            );

            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }

          const tail = thinkFilter.flush();

          if (tail) {
            controller.enqueue(encoder.encode(tail));
          }
        } catch {
          // Client abort or mid-stream upstream failure — close what we have;
          // the client treats a truncated body as a stopped answer.
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof OpenAI.RateLimitError) {
      return Response.json({ error: "rate_limited" }, { status: 429 });
    }

    if (
      error instanceof OpenAI.APIConnectionError ||
      (error instanceof OpenAI.APIError &&
        typeof error.status === "number" &&
        error.status >= 500)
    ) {
      return Response.json({ error: "upstream" }, { status: 502 });
    }

    return Response.json({ error: "unknown" }, { status: 500 });
  }
}
