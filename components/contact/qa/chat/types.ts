export type ChatMessage =
  | { id: string; role: "user"; text: string }
  | {
      id: string;
      role: "assistant";
      source: "canned" | "ai";
      text: string;
      status: "pending" | "streaming" | "done" | "error";
      errorReason?: QaErrorReason;
    };

export type QaErrorReason =
  | "rate_limited"
  | "upstream"
  | "network"
  | "unavailable";

/**
 * "loading"  — availability check in flight
 * "enabled"  — free-text AI answers available
 * "offline"  — no API key / endpoint unavailable (canned chips still work)
 * "resting"  — per-session soft cap reached (canned chips still work)
 */
export type QaAiState = "loading" | "enabled" | "offline" | "resting";
