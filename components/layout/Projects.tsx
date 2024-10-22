import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Projects() {
	const t = useTranslations("projects");
	return (
		<section className="w-full container">
			<h3 className="text-3xl text-center font-bold mb-8">{t("title")}</h3>
			{/* PROJECT 1 E-COMMERCE */}
			<div className=" min-h-[75dvh]">
				<h4 className="text-xl font-bold mb-4">{"1)"} E-commerce App</h4>
				<div className="grid grid-flow-row md:grid-flow-col gap-4">
					{/* IMAGE SIDE */}
					<div className=" w-full max-w-sm md:max-w-[400px] mx-auto lg:mx-0 rounded-md overflow-hidden shadow-2xl">
						<div className="h-8 bg-zinc-600  flex items-center p-1">
							{/* dots */}
							<div className="flex gap-2 ml-3">
								<div className="w-4 h-4 rounded-full bg-red-400"></div>
								<div className="w-4 h-4 rounded-full bg-white"></div>
								<div className="w-4 h-4 rounded-full bg-green-500"></div>
							</div>
						</div>
						<div className="border border-zinc-600 ">
							<Image
								src={"/static/images/ecommerce-app-home-page.png"}
								className="w-full"
								alt="Cemre's personal image"
								width={400}
								height={400}
							/>
						</div>
					</div>
					{/* INFO SIDE */}
					<div>Project Info</div>
				</div>
			</div>
			{/* PROJECT 2 WORDLE */}
			<div className=" min-h-[75dvh]">
				<h4 className="text-xl font-bold mb-4">{"2)"} Wordle Clone</h4>
				<div className="grid grid-flow-row md:grid-flow-col gap-4">
					{/* INFO SIDE */}
					<div>Project Info</div>
					{/* IMAGE SIDE */}
					<div className=" w-full max-w-sm md:max-w-[400px] mx-auto lg:mx-0 rounded-md overflow-hidden shadow-2xl">
						<div className="h-8 bg-zinc-600  flex items-center p-1">
							{/* dots */}
							<div className="flex gap-2 ml-3">
								<div className="w-4 h-4 rounded-full bg-red-400"></div>
								<div className="w-4 h-4 rounded-full bg-white"></div>
								<div className="w-4 h-4 rounded-full bg-green-500"></div>
							</div>
						</div>
						<div className="border border-zinc-600 ">
							<Image
								src={"/static/images/ecommerce-app-home-page.png"}
								className="w-full"
								alt="Cemre's personal image"
								width={400}
								height={400}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
