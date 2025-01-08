"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { toast } from "sonner";
import SectionMainHeadings from "../SectionMainHeadings";
import { cn } from "@/lib/utils";
import { Locale } from "@/src/i18n";
const initialErrors = {
	email: {
		status: "idle",
		errorMessage: "It should be valid e-mail adress!",
	},
	message: {
		status: "idle",
		errorMessage: "Message should be at least 20 character",
	},
};
type InputFields = "email" | "message";

export const Contact = () => {
	const t = useTranslations("contact-component");
	const locale = useLocale() as Locale;
	const [isPending, setIsPending] = useState(false);
	const [values, setValues] = useState({ senderEmail: "", message: "" });
	const [errors, setErrors] = useState(initialErrors);
	const [focusList, setFocusList] = useState<string[]>([]);
	// CONTROLLING FORM
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	// FORM SUBMIT
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const formData = new FormData(e.target as HTMLFormElement);
		// const senderEmail = formData.get("senderEmail");
		// const message = formData.get("message");
		setIsPending(true);
		try {
			const res = await fetch("/api/email", {
				method: "POST",
				body: JSON.stringify({ senderEmail: values.senderEmail, message: values.message }),
			});
			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error || "An unexpected error occurred");
			}

			const json = await res.json();
			setErrors((prev) => {
				const newErrors = { ...prev };
				newErrors.email.status = "success";
				newErrors.message.status = "success";
				return newErrors;
			});
			toast.success(t("success-message"));
			console.info(json.message);
		} catch (error) {
			console.log(error);
			toast.error(t("error-message"));
		} finally {
			setIsPending(false);
		}
		// console.log({ senderEmail: values.senderEmail, message: values.message });
	};
	// FORM VALIDATION
	const onInputInvalid = (field: InputFields) => {
		const newErrors = { ...errors };
		newErrors[field].status = "failed";
		setFocusList((prev) => (prev.includes(field) ? prev : [...prev, field]));
		setErrors(newErrors);
	};

	return (
		<section id="contact" className="w-full mt-24 lg:mt-52 mb-24 lg:mb-52 px-4 section-scroll-margin">
			<div className="w-full max-w-screen-md mx-auto mt-auto">
				<SectionMainHeadings>{t("title")}</SectionMainHeadings>
				<p className="text-gray-700 -mt-6 dark:text-white/80 text-center">
					{t("info-start")}{" "}
					<a className="underline" href="mailto:cemrekur@gmail.com">
						cemrekur@gmail.com
					</a>{" "}
					{t("info-end")}
				</p>
				<form
					className="mt-10 flex flex-col dark:text-black"
					onSubmit={handleSubmit}
					onInvalid={(e) => e.preventDefault()}
				>
					<div className="relative">
						<label htmlFor="emailField" className="sr-only">
							{t("emailLabel")}
						</label>
						<input
							onInvalid={() => onInputInvalid("email")}
							id="emailField"
							className={cn(
								"w-full h-14 valid:border-green-500 valid:bg-green-50 dark:valid:border-green-500 dark:valid:bg-green-100 px-4 peer rounded-lg border border-t-zinc-200 dark:border-t-zinc-800 dark:bg-white dark:focus:outline-white transition-all dark:outline-none",
								{
									"invalid:border-red-300 invalid:bg-red-50 dark:invalid:border-red-300 dark:invalid:bg-red-50":
										focusList.includes("email"),
								}
							)}
							onChange={(e) => onInputChange(e)}
							name="senderEmail"
							type="email"
							pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
							value={values["senderEmail"]}
							required
							maxLength={500}
							onBlur={() => setFocusList((prev) => (prev.includes("email") ? prev : [...prev, "email"]))}
							placeholder="example@gmail.com"
						/>
						{errors.email.status === "failed" && (
							<span className="block text-red-400 text-sm font-semibold mt-1  peer-valid:hidden">
								{locale === "en" ? "It should be a valid e-mail adress!" : "Geçerli bir e-posta adresi girin"}
							</span>
						)}
					</div>
					<div className="relative mt-3">
						<label htmlFor="messageField" className="sr-only">
							{t("textLabel")}
						</label>
						<textarea
							onInvalid={() => onInputInvalid("message")}
							id="messageField"
							className={cn(
								"w-full h-52 valid:border-green-500 valid:bg-green-50 dark:valid:border-green-500 dark:valid:bg-green-100 peer rounded-lg border border-t-zinc-200 dark:border-t-zinc-800 p-4 dark:bg-white dark:focus:outline-white transition-all dark:outline-none resize-none",
								{
									"invalid:border-red-300 invalid:bg-red-50 dark:invalid:border-red-300 dark:invalid:bg-red-50":
										focusList.includes("message"),
								}
							)}
							onChange={(e) => onInputChange(e)}
							name="message"
							value={values["message"]}
							// @ts-ignore
							pattern=".{20,}"
							minLength={20}
							required
							onBlur={() => setFocusList((prev) => (prev.includes("message") ? prev : [...prev, "message"]))}
							maxLength={5000}
						/>
						{errors.message.status === "failed" && (
							<span className="block text-red-400 text-sm font-semibold mt-1 peer-valid:hidden">
								{locale === "en" ? "Message should be at least 20 character" : "Mesaj en az 20 karakter olmalıdır."}
							</span>
						)}
					</div>
					<div className="mt-4 flex justify-center">
						<button
							disabled={isPending}
							className="py-3 px-4 w-full lg:w-fit lg:py-4 lg:px-20 font-bold primary-button rounded-lg disabled:opacity-50 disabled:active:scale-100 disabled:pointer-events-none"
						>
							{t("send-email")}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
