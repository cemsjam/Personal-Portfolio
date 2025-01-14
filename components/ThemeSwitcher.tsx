"use client";
import { Locale } from "@/src/i18n";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
	const locale = useLocale() as Locale;
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		let localTheme = window.localStorage.getItem("theme");
		if (localTheme !== null) {
			const parsedLocalTheme = JSON.parse(localTheme);
			document.documentElement.dataset.mode = parsedLocalTheme;
			setTheme(parsedLocalTheme);
		} else {
			let systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : ("light" as Theme);
			document.documentElement.dataset.mode = systemTheme;
			setTheme(systemTheme);
		}
	}, []);
	const toggleTheme = () => {
		let currentTheme = (theme === "dark" ? "light" : "dark") as Theme;
		document.documentElement.dataset.mode = currentTheme;
		window.localStorage.setItem("theme", JSON.stringify(currentTheme));
		setTheme(currentTheme);
	};
	return (
		<div>
			<button
				type="button"
				role="switch"
				aria-checked={theme === "dark"}
				id="themeSwitch"
				aria-labelledby="theme-label"
				onClick={toggleTheme}
			>
				<span className="flex items-center w-[42px] h-[24px] bg-zinc-200 dark:bg-zinc-800 rounded-full">
					<span
						className="flex items-center justify-center h-[20px] w-[20px] transition-all bg-white dark:bg-black rounded-full translate-x-[2px] dark:translate-x-[calc(100%-2px)]"
						aria-hidden="true"
					>
						<span className="hidden dark:block text-white">
							<IoMoonOutline size={12} />
						</span>
						<span className="dark:hidden text-gray-500">
							<IoSunnyOutline size={12} />
						</span>
					</span>
				</span>
			</button>
			<span className="sr-only" id="theme-label">
				{locale === "en" ? "Toggle Theme" : "Tema Değiştir"}
			</span>
		</div>
	);
}
