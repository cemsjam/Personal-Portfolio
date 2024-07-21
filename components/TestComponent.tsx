"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

function TestComponent() {
	const locale = useLocale();
	console.log("currentLocale", locale);
	return <></>;
}

export default TestComponent;
