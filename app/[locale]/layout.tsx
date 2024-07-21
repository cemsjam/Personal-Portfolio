import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { cn } from "@/lib/utils";
// const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Cemre | Personal Portfolio",
	description: "I am a front-end developer with 1.5+ years of experience.",
};

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
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body
				className={cn("min-h-screen flex flex-col t-bg-color t-text-color", inter.variable)}
			>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
