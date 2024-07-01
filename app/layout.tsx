import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "@/lib/i18n";
import i18nConfig from "@/lib/i18nConfig";
// const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
	title: "Cemre | Personal Portfolio",
	description: "I am a front-end developer with 1.5+ years of experience.",
};

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale}>
			<body className={`${inter.className} flex flex-col t-bg-color t-text-color`}>
				{children}
			</body>
		</html>
	);
}
