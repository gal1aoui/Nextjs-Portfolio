import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import {
  cookieName,
  fallbackLng,
  headerName,
  languages,
} from "@/i18n/settings";
import {
  experienceModeCookieName,
  isExperienceMode,
} from "@/lib/experience-mode";

acceptLanguage.languages([...languages]);

function getPreferredLanguage(request: NextRequest) {
  const cookieLanguage = request.cookies.get(cookieName)?.value;

  if (cookieLanguage) {
    return acceptLanguage.get(cookieLanguage) || fallbackLng;
  }

  return (
    acceptLanguage.get(request.headers.get("Accept-Language") || "") ||
    fallbackLng
  );
}

function prefersModernExperience(request: NextRequest) {
  const mode = request.cookies.get(experienceModeCookieName)?.value;

  return Boolean(mode && isExperienceMode(mode) && mode === "modern");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLanguage = languages.some(
    (lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}/`),
  );

  if (!hasLanguage) {
    const preferredLanguage = getPreferredLanguage(request);
    const redirectUrl = request.nextUrl.clone();

    // Sticky modern mode: send the bare home path straight to the modern
    // experience in a single hop. Deep links stay classic; crawlers and
    // cookie-less visitors always get the classic default.
    if (pathname === "/" && prefersModernExperience(request)) {
      redirectUrl.pathname = `/${preferredLanguage}/modern`;
    } else {
      redirectUrl.pathname =
        pathname === "/"
          ? `/${preferredLanguage}`
          : `/${preferredLanguage}${pathname}`;
    }

    return NextResponse.redirect(redirectUrl);
  }

  const currentLanguage =
    languages.find(
      (lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}/`),
    ) || fallbackLng;

  // Note: /{lng} is deliberately NOT redirected for modern-cookie users —
  // the classic navbar/footer link Home to /{lng}, and redirecting it would
  // make the classic home unreachable from within the classic UI. Stickiness
  // applies to the bare domain entry ("/") only.

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set(headerName, currentLanguage);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(cookieName, currentLanguage, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
