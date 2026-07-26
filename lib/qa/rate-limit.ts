/**
 * Best-effort in-memory rate limiter. State lives per warm serverless
 * instance, so this is a soft guard — the robust layer is a Vercel WAF
 * rate-limit rule on /api/qa (configured in the dashboard).
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const SWEEP_THRESHOLD = 1_000;

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (buckets.size > SWEEP_THRESHOLD) {
      for (const [entryKey, entry] of buckets) {
        if (entry.resetAt <= now) buckets.delete(entryKey);
      }
    }

    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });

    return true;
  }

  if (bucket.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  bucket.count += 1;

  return true;
}
