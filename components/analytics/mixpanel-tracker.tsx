"use client";

import { useEffect } from "react";

import { getMixpanel } from "@/lib/mixpanel-client";

/**
 * Boots Mixpanel once on mount (when NEXT_PUBLIC_MIXPANEL_TOKEN is set).
 * Page views, clicks and session replay come from autocapture; custom events
 * flow through lib/analytics.ts. Renders nothing.
 */
export default function MixpanelTracker() {
  useEffect(() => {
    void getMixpanel();
  }, []);

  return null;
}
