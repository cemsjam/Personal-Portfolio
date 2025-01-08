import React from "react";

const SectionMainHeadings = ({ children }: { children: React.ReactNode }) => {
	return <h3 className="text-5xl lg:text-6xl text-center font-bold mb-8">{children}</h3>;
};

export default SectionMainHeadings;
