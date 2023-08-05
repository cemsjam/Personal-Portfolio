import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: "Cemre | Personal Portfolio",
	description: "Cemre is front-end developer with 1.5 years of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${quicksand.className} flex flex-col bg-white text-zinc-500 dark:bg-black `}
			>
				{children}
			</body>
		</html>
	);
}
