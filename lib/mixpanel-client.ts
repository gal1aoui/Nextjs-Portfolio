import type { Mixpanel } from "mixpanel-browser";

let mixpanelPromise: Promise<Mixpanel | null> | null = null;

/**
 * Lazy Mixpanel singleton. The SDK is only downloaded in the browser and only
 * when NEXT_PUBLIC_MIXPANEL_TOKEN is configured; returns null otherwise.
 *
 * Autocapture records page views (including client-side route changes),
 * clicks and form interactions on its own, so no manual pageview calls are
 * needed. Custom events still flow through lib/analytics.ts.
 */
export function getMixpanel(): Promise<Mixpanel | null> | null {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!token || typeof window === "undefined") return null;

  mixpanelPromise ??= import("mixpanel-browser")
    .then((module) => {
      const config = {
        autocapture: true,
        record_sessions_percent: 100,
        api_host: "https://api-eu.mixpanel.com",
        persistence: "localStorage",
      } as Parameters<typeof module.default.init>[1];

      module.default.init(token, config);

      return module.default;
    })
    .catch(() => null);

  return mixpanelPromise;
}
