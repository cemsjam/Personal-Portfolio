"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { type Locale } from "@/src/i18n";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const t = useTranslations();

	function handleLocaleChange(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button type="button" variant="default" className="gradient-border-parent">
					<GlobeIcon className="w-5" />
				</Button>
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
					English
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={locale === "tr"}
					onClick={() => {
						handleLocaleChange("tr");
					}}
				>
					Turkish
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
