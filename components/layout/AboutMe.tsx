import React from "react";

const AboutMe = () => {
	return (
		<section className="max-w-[60ch]">
			<h3 className="text-3xl font-bold mb-4">About</h3>
			<p className="mb-3">
				After graduating with a degree as a <span className="font-medium">Tourist Guide</span>, I decided to pursue my
				passion for programming. I am a <span className="font-medium">self-taught front-end developer</span> and learned
				enough to land my <span className="font-medium">first job within 6 months.</span>{" "}
				<span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
				<span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
				stack is <span className="font-medium">React.js, Next.js</span>. I am also familiar with TypeScript. I am always
				looking to learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a software developer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing
				with my guitar. I also enjoy <span className="font-medium">learning new things</span>
			</p>
		</section>
	);
};

export default AboutMe;
