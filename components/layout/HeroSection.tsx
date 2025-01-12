import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/src/i18n";
import Avatar from "../Avatar";

const HeroSection = () => {
	const t = useTranslations("hero");
	const locale = useLocale() as Locale;

	return (
		<section className="relative min-h-[70dvh] flex pt-12 pb-12">
			<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
			<div className="bg-[#dbd7fb] absolute top-[30rem] lg:top-[-1rem] -z-10 left-0 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:h-[40rem]  lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 m-auto container">
				<Avatar />

				<div className="flex flex-col justify-center max-w-[60ch] gap-8 relative z-50">
					{/* INFO */}
					{locale === "en" && (
						<div className="dark:text-white">
							<div className="font-bold text-5xl lg:text-6xl text-black dark:text-white mb-4 leading-[1.15]">
								Hey there, I&apos;m Cemre.
							</div>{" "}
							I&apos;m a <span className="font-bold">front-end developer</span> with{" "}
							<span className="font-bold">2+ years</span> of experience. I enjoy building{" "}
							<span className="italic">sites & apps</span>. My focus is <span className="font-medium">React js</span>.
						</div>
					)}
					{locale === "tr" && (
						<div className="dark:text-white">
							<div className="font-bold text-5xl lg:text-6xl text-black dark:text-white mb-4 leading-[1.15]">
								Merhaba, ben Cemre.
							</div>
							<span className="font-bold">2+ yıllık</span> deneyime sahip bir{" "}
							<span className="font-bold">front-end geliştiricisiyim</span>.
							<span className="italic">Web siteleri ve uygulamalar</span> geliştirmekten keyif alıyorum. Yoğunlaştığım
							kısım ise <span className="font-medium">React.js</span>.
						</div>
					)}
					{/* ACTIONS */}
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="#contact"
							className="flex h-[52px] min-w-[220px] text-center justify-center gap-2 items-center px-7 py-3 rounded-full font-bold bg-white dark:text-black hover:opacity-90 active:scale-95 active:opacity-100"
						>
							{t("contactLabel")} <BsArrowRight fill="#000" size={18} />
						</Link>
						<DownloadCVButton />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

const DownloadCVButton = () => {
	const t = useTranslations("hero");
	const locale = useLocale() as Locale;
	const pdfPath =
		locale === "tr"
			? "/static/pdf/Cemre_Kur_Özgeçmiş_Web_Geliştirici_TR.pdf"
			: "/static/pdf/Cemre_Kur_Resume_Web_Development_EN.pdf";

	const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault(); // Prevent navigation
		const link = document.createElement("a");
		link.href = pdfPath;
		link.download = pdfPath.split("/").pop() || "/static/pdf/Cemre_Kur_Resume_Web_Development_EN.pdf"; // Use the file name dynamically
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<Link href={pdfPath} passHref legacyBehavior>
			<a
				className="flex h-[52px] min-w-[220px] text-center justify-center gap-2 items-center px-7 py-3 rounded-full font-bold primary-button"
				onClick={handleDownload}
			>
				{t("downloadLabel")}
				<HiDownload size={18} />
			</a>
		</Link>
	);
};
