import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@/src/i18n";

import SectionMainHeadings from "../SectionMainHeadings";
import { experienceEN, experienceTR } from "./ExperienceData";
function Experience() {
	const t = useTranslations("experience");
	const locale = useLocale() as Locale;
	return (
		<section id="experience" className="w-full mt-24 lg:mt-36 mb-24 lg:mb-36 px-8 scroll-mt-12">
			<div className="w-full max-w-screen-md mx-auto mt-auto">
				<SectionMainHeadings>{t("title")}</SectionMainHeadings>
				<div className="font-bold -ml-4">{t("summary")}</div>
				<div className="mt-8">
					{locale === "en" && (
						<ul className="list-disc marker:text-[var(--primary-btn-bg-clr)]">
							{experienceEN.map((item) => (
								<li key={item.id}>{item.description}</li>
							))}
						</ul>
					)}
					{locale === "tr" && (
						<ul className="list-disc marker:text-[var(--primary-btn-bg-clr)]">
							{experienceTR.map((item) => (
								<li key={item.id}>{item.description}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}

export default Experience;
