"use client";

import React from "react";
import { Toaster } from "sonner";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { Contact } from "@/components/layout/Contact";
import HeroSection from "@/components/layout/HeroSection";
import AboutMe from "@/components/layout/AboutMe";
import Projects from "@/components/layout/Projects";
import Experience from "@/components/layout/Experience";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex min-h-screen flex-col items-center gap-10 overflow-hidden">
				{/* HERO */}
				<HeroSection />
				<AboutMe />
				<Projects />
				<Experience />
				<Contact />
			</main>

			<Footer />
			<Toaster position="top-right" richColors visibleToasts={1} />
		</>
	);
}
