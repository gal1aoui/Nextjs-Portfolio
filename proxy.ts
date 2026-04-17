import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import {
  cookieName,
  fallbackLng,
  headerName,
  languages,
} from "@/i18n/settings";

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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLanguage = languages.some(
    (lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}/`),
  );

  if (!hasLanguage) {
    const preferredLanguage = getPreferredLanguage(request);
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname =
      pathname === "/"
        ? `/${preferredLanguage}`
        : `/${preferredLanguage}${pathname}`;

    return NextResponse.redirect(redirectUrl);
  }

  const currentLanguage =
    languages.find(
      (lng) => pathname === `/${lng}` || pathname.startsWith(`/${lng}/`),
    ) || fallbackLng;
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
