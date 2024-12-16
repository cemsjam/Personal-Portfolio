import { type Locale, locales } from "@/src/i18n";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
	locales,
	defaultLocale: "tr" satisfies Locale,
	localePrefix: "never",
});

export default function (req: NextRequest): NextResponse {
	const acceptLanguage = req.headers.get("accept-language");
	const isTRPreferred = acceptLanguage?.split(",").find((el) => el.startsWith("tr-TR")) ? true : false;
	const localeFromCookie = req.cookies.get("NEXT_LOCALE");
	if (isTRPreferred && localeFromCookie === undefined) {
		req.cookies.set("NEXT_LOCALE", "tr");
	}
	return nextIntlMiddleware(req);
}

export const config = {
	// match only internationalized pathnames
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		"/((?!api|_next|_vercel|.*\\..*|not-found).*)",
	],
};
