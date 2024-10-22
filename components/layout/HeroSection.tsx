import React from "react";
import WithGradient from "../WithGradient";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useLocale } from "next-intl";
import { Locale } from "@/src/i18n";
import Avatar from "../Avatar";

const HeroSection = () => {
	const locale = useLocale() as Locale;

	return (
		<section className="relative min-h-[75dvh] flex">
			<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
			<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 m-auto container">
				<div className="flex flex-col justify-center max-w-[60ch] gap-8 relative z-50">
					{/* INFO */}
					{locale === "en" && (
						<div className="dark:text-white">
							<div className="font-bold text-6xl text-black dark:text-white mb-4 leading-[1.15]">
								Hey there, I'm Cemre.
							</div>{" "}
							I'm a <span className="font-bold">front-end developer</span> with{" "}
							<span className="font-bold">1.5+ years</span> of experience. I enjoy building{" "}
							<span className="italic">sites & apps</span>. My focus is <span className="font-medium">React js</span>.
						</div>
					)}
					{locale === "tr" && (
						<div className="dark:text-white">
							<div className="font-bold text-6xl text-black dark:text-white mb-4 leading-[1.15]">
								Merhaba, ben Cemre.
							</div>
							<span className="font-bold">1.5+ yıllık</span> deneyime sahip bir{" "}
							<span className="font-bold">front-end geliştiricisiyim</span>.
							<span className="italic">Web siteleri ve uygulamalar</span> geliştirmekten keyif alıyorum. Yoğunlaştığım
							kısım ise <span className="font-medium">React.js</span>.
						</div>
					)}
					{/* ACTIONS */}
					<div className="flex flex-col sm:flex-row gap-4">
						<WithGradient borderRadius="9999px">
							<Link
								className="flex h-[52px] gap-2 items-center px-7 py-3 rounded-full font-bold text-white bg-zinc-900"
								href="#implement"
							>
								Download CV
								<HiDownload size={15} />
							</Link>
						</WithGradient>
						<button className="flex h-[52px] gap-2 items-center px-7 py-3 rounded-full font-bold bg-white dark:text-black">
							Contact me here <BsArrowRight size={15} />
						</button>
					</div>
				</div>
				{/* AVATAR SECTION */}
				<Avatar />
			</div>
		</section>
	);
};

export default HeroSection;
