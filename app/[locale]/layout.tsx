// @ts-nocheck
import "../globals.css";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
	try {
		const messages = await getMessages(locale);

		const baseUrl = "https://cemrekur.netlify.app";

		return {
			metadataBase: new URL(baseUrl),
			title: messages.head.metadata.title || "Cemre - Web Developer",
			description: messages.head.metadata.description || "A portfolio showcasing Cemre's skills.",
			alternates: {
				canonical: `${baseUrl}/${locale}`,
				languages: {
					en: `${baseUrl}/en`,
					tr: `${baseUrl}/tr`,
				},
			},
			openGraph: {
				title: messages.head.metadata.title || "Cemre - Web Developer",
				description: messages.head.metadata.description || "A portfolio showcasing Cemre's skills.",
				type: "website",
				locale,
				siteName: "Cemre - Web Developer",
			},
			twitter: {
				card: "summary_large_image",
				title: messages.head.metadata.title || "Cemre - Web Developer",
				description: messages.head.metadata.description || "A portfolio showcasing Cemre's skills.",
			},
		};
	} catch (error) {
		console.error("Error fetching messages for metadata:", error);
		return {
			title: "Cemre - Web Developer",
			description: "A portfolio showcasing Cemre's skills and projects.",
		};
	}
}

export function generateStaticParams() {
	return ["en", "tr"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	unstable_setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} className="scroll-smooth">
			<body className={cn("min-h-screen flex flex-col t-bg-color t-text-color", inter.variable)}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
