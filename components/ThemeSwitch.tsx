"use client";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		let localTheme = window.localStorage.getItem("theme");
		if (localTheme !== null) {
			const parsedLocalTheme = JSON.parse(localTheme);
			console.log("comes from localstorage", parsedLocalTheme);
			document.documentElement.dataset.mode = parsedLocalTheme;
			setTheme(parsedLocalTheme);
		} else {
			console.log("comes from system");
			let systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches
				? "dark"
				: ("light" as Theme);
			document.documentElement.dataset.moda = systemTheme;
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
		<button type="button" onClick={toggleTheme}>
			{theme}
		</button>
	);
}
