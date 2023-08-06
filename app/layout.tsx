import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: "Cemre | Personal Portfolio",
	description: "Cemre is front-end developer with 1.5 years of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col t-bg-color t-text-color`}>
				{children}
			</body>
		</html>
	);
}
