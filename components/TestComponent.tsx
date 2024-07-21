"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

function TestComponent() {
	const t = useTranslations();
	const locale = useLocale();
	return <div>{locale}</div>;
}

export default TestComponent;
