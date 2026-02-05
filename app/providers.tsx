"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

/**
 * Sync the `inert` attribute with `aria-hidden` on HeroUI's overlay container.
 * When a Modal/Drawer opens, React Aria sets `aria-hidden="true"` on the
 * background wrapper but leaves its focusable descendants reachable by keyboard.
 * Mirroring `inert` makes them truly non-interactive and resolves the
 * "aria-hidden element contains focusable elements" a11y violation.
 */
function OverlayInertSync() {
  React.useEffect(() => {
    const container = document.querySelector("[data-overlay-container]");

    if (!(container instanceof HTMLElement)) return;

    const sync = () => {
      container.inert = container.getAttribute("aria-hidden") === "true";
    };

    const observer = new MutationObserver(sync);

    observer.observe(container, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
        <OverlayInertSync />
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
