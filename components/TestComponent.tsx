"use client";
import React from "react";
import { useTranslation } from "react-i18next";

function TestComponent() {
	const { t } = useTranslation();
	return <div>{t("test")}</div>;
}

export default TestComponent;
