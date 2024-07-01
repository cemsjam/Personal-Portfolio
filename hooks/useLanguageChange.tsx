import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

function useLanguageChange() {
	const { i18n } = useTranslation();
	const router = useRouter();

	const currentLocale = i18n.language;
	const handleChange = React.useCallback(
		(newLocale: string) => () => {
			const days = 30;
			const date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			const expires = "; expires=" + date.toUTCString();
			document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

			router.refresh();
		},
		[currentLocale, router]
	);
	return handleChange;
}

export default useLanguageChange;
