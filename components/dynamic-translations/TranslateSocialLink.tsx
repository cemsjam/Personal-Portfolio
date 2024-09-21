"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { useTranslations } from "next-intl";

export const TranslateSocialLinks = () => {
	const t = useTranslations("socials");

	return [
		{
			label: t("github"),
			icon: AiFillGithub,
			href: "https://github.com/cemsjam",
		},
		{
			label: t("linkedin"),
			icon: AiFillLinkedin,
			href: "https://github.com/cemsjam",
		},
	];
};
