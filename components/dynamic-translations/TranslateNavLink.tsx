"use client";

import { useTranslations } from "next-intl";

export const TranslateNavLinks = () => {
	const t = useTranslations("nav");

	return [
		// {
		// 	name: t("home"),
		// 	hash: "/home",
		// },
		{
			name: t("about"),
			hash: "#about",
		},
		{
			name: t("projects"),
			hash: "#projects",
		},
		{
			name: t("experience"),
			hash: "/experience",
		},
		{
			name: t("contact"),
			hash: "#contact",
		},
	];
};
