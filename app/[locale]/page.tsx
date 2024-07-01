"use client";

import React from "react";

import TestComponent from "@/components/TestComponent";
import Header from "@/components/layout/header/Header";
import GradientCard from "@/components/GradientCard";
import Footer from "@/components/layout/Footer";
import useLanguageChange from "@/hooks/useLanguageChange";

export default function Home() {
	const handleLanguageChange = useLanguageChange();

	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center gap-10 p-24">
				<div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-4">
					<GradientCard />
					<GradientCard />
				</div>
				<div className="flex flex-row gap-4">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleLanguageChange("en")}
					>
						English
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleLanguageChange("tr")}
					>
						Turkish
					</button>
				</div>
				<TestComponent />
			</main>

			<Footer />
		</>
	);
}
