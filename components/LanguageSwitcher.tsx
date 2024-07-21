"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { type Locale } from "@/src/i18n";
import { SlGlobe } from "react-icons/sl";
import { FaGlobeAmericas } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { socialLinkCustomStylesForGradient } from "./layout/Widgets";

export const LanguageSwitcher = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const t = useTranslations();

	function handleLocaleChange(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<div className="gradient-border-parent" style={socialLinkCustomStylesForGradient}>
					<button
						type="button"
						className="gradient-border flex items-center justify-center h-8 w-8"
					>
						<SlGlobe size={18} className="text-zinc-700 dark:text-white" />
					</button>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuCheckboxItem
					checked={locale === "en"}
					onClick={() => {
						handleLocaleChange("en");
					}}
				>
					{t("english")}
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={locale === "tr"}
					onClick={() => {
						handleLocaleChange("tr");
					}}
				>
					{t("turkish")}
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
