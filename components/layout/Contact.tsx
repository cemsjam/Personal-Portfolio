"use client";
import { useTranslations } from "next-intl";
import React from "react";
import SectionMainHeadings from "../SectionMainHeadings";

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
		<section id="contact" className="w-full mt-24 lg:mt-52 mb-24 lg:mb-52 px-4">
			<div className="w-full max-w-screen-md mx-auto mt-auto">
				<SectionMainHeadings>{t("title")}</SectionMainHeadings>
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
					<div className="mt-4 flex justify-center">
						<button className="py-3 px-4 w-full lg:w-fit lg:py-4 lg:px-20 font-bold primary-button rounded-lg">
							{t("send-email")}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
