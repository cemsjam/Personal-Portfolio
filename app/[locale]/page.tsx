"use client";

import React from "react";

import TestComponent from "@/components/TestComponent";
import Header from "@/components/layout/header/Header";
import GradientCard from "@/components/GradientCard";
import Footer from "@/components/layout/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center gap-10 p-24">
				<div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-4">
					<GradientCard />
					<GradientCard />
				</div>
				<TestComponent />
			</main>

			<Footer />
		</>
	);
}
