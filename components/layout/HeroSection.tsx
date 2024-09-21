import React from "react";
import WithGradient from "../WithGradient";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const HeroSection = () => {
	return (
		<section className="relative">
			<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
			<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
			<div className="flex flex-col max-w-[60ch] gap-4 relative z-50">
				<div>Image</div>
				<div className="dark:text-white">
					<span className="font-bold">Hello, I'm Cemre.</span> I'm a{" "}
					<span className="font-bold">front-end developer</span> with <span className="font-bold">1.5+ years</span> of
					experience. I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
					<span className="font-medium">React js</span>.
				</div>
				<div className="flex justify-center gap-4">
					<WithGradient borderRadius="9999px">
						<Link
							className="flex gap-2 items-center px-7 py-3 rounded-full font-bold text-white bg-zinc-900"
							href="#implement"
						>
							Download CV
							<HiDownload size={15} />
						</Link>
					</WithGradient>
					<button className="flex gap-2 items-center px-7 py-3 rounded-full font-bold bg-white dark:text-black">
						Contact me here <BsArrowRight size={15} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
