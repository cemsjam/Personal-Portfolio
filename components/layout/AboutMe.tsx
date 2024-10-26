import { Locale } from "@/src/i18n";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import SectionMainHeadings from "../SectionMainHeadings";

const AboutMe = () => {
	const locale = useLocale() as Locale;
	const t = useTranslations("about-me");
	return (
		<section className="min-h-[45dvh] w-full py-8 px-4 md:py-4 flex justify-center items-center">
			<div className="max-w-[80ch] mx-auto">
				<SectionMainHeadings>{t("title")}</SectionMainHeadings>
				<div className="dark:text-white">
					{locale === "en" && (
						<>
							<p className="mb-3">
								After graduating with a degree as a <span className="font-bold">Tourist Guide</span>, I decided to
								pursue my passion for programming. I am a{" "}
								<span className="font-bold">self-taught front-end developer</span> , learned enough to land my{" "}
								<span className="font-bold">first job within 6 months.</span>{" "}
								<span className="italic">My favorite part of programming</span> is the problem-solving aspect.{" "}
								<span className="underline">I love the feeling of finally figuring out a solution to a problem.</span>{" "}
								My core stack is <span className="font-bold">React.js, Next.js</span>. I am also familiar with
								TypeScript. I am always looking to learn new technologies. I am currently looking for a{" "}
								<span className="font-bold">full-time position</span> as a software developer.
							</p>

							<p>
								<span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and
								playing with my guitar. I also enjoy <span className="font-bold">learning new things.</span>
							</p>
						</>
					)}
					{locale === "tr" && (
						<>
							<p className="mb-3">
								Turist Rehberliği bölümünden mezun olduktan sonra, programlamaya olan tutkumun peşinden gitmeye karar
								verdim.
								<span className="font-bold">Kendi kendine öğrenmiş bir front-end geliştiriciyim</span> ve{" "}
								<span className="font-bold">6 ay içinde ilk işimi bulacak kadar</span> kendimi geliştirdim.{" "}
								<span className="italic">Programlamada en çok sevdiğim şey</span>
								<span className="underline">
									{" "}
									problem çözme kısmı. Bir problemi çözdüğümde hissettiğim o duyguyu çok seviyorum
								</span>
								. Temel teknolojilerim <span className="font-bold">React.js ve Next.js</span>. Ayrıca TypeScript bilgim
								de var. Her zaman yeni teknolojiler öğrenmeye açık biriyim. Şu anda{" "}
								<span className="font-bold">tam zamanlı bir yazılım geliştirici pozisyonu</span> arıyorum.
							</p>

							<p>
								<span className="italic">Kod yazmadığım zamanlarda</span> video oyunları oynamaktan, film izlemekten ve
								gitar çalmaktan keyif alıyorum. Ayrıca <span className="font-bold">yeni şeyler öğrenmekten</span> de
								büyük keyif alıyorum.
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
