"use client";
import { useTranslations } from "next-intl";
import React from "react";

export const Contact = () => {
	const t = useTranslations("contact-component");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const senderEmail = formData.get("senderEmail");
		const message = formData.get("message");
		try {
			const res = await fetch("/api/email", { method: "POST", body: JSON.stringify({ senderEmail, message }) });
			if (res.status === 200) {
				const json = await res.json();
				console.info(json.message);
			}
		} catch (error) {
			console.log(error);
		}
		console.log({ senderEmail, message });
	};
	return (
		<div className="w-full max-w-screen-md mx-auto mt-auto">
			<h3 className="text-3xl font-medium capitalize mb-8 text-center">{t("title")}</h3>
			<p className="text-gray-700 -mt-6 dark:text-white/80 text-center">
				{t("info-start")}{" "}
				<a className="underline" href="mailto:cemrekur@gmail.com">
					cemrekur@gmail.com
				</a>{" "}
				{t("info-end")}
			</p>
			<form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
				<input
					className="w-full h-14 px-4 rounded-lg border border-t-zinc-200 dark:border-t-zinc-800 dark:bg-white dark:focus:outline-white  transition-all dark:outline-none"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="example@gmail.com"
				/>
				<textarea
					className="w-full h-52 my-3 rounded-lg border border-t-zinc-200 dark:border-t-zinc-800 p-4 dark:bg-white dark:focus:outline-white transition-all dark:outline-none resize-none"
					name="message"
					required
					maxLength={5000}
				/>
				<div className="flex justify-center">
					<div className="gradient-border-parent w-full lg:w-fit">
						<button className="py-3 px-4 w-full lg:w-fit lg:py-4 lg:px-20 gradient-border t-text-color">
							{t("send-email")}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
