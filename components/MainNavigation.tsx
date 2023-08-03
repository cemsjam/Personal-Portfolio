"use client";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

import { cn } from "@/lib/utils";
import { mainNavLinks } from "@/lib/data";
import ToggleMenu from "./ToggleMenu";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

export default function MainNavigation() {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu((prev) => !prev);
	};
	const closeMenu = () => {
		setOpenMenu(false);
	};
	return (
		// drawer
		<div>
			<ToggleMenu toggleMenu={toggleMenu} />
			<div
				className={cn(
					"main-navigation-drawer -translate-x-full transition-transform fixed lg:static left-0 top-0 h-screen lg:h-auto w-[300px] lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none invisible",
					{
						"translate-x-0 visible": openMenu,
					}
				)}
			>
				{/* drawer header */}
				<div className="flex justify-between items-center h-16 px-4 sm:px-6 border-b border-b-slate-300 lg:hidden">
					<button type="button" onClick={closeMenu}>
						<IoMdClose size={24} />
						<span className="sr-only">Close Main Navigation</span>
					</button>
					<div className="logo">logo</div>
					<ThemeSwitch />
				</div>
				{/* menu */}
				<nav>
					<ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
						{mainNavLinks.map((nav) => {
							return (
								<li key={nav.hash}>
									<Link href={nav.hash} className="block w-full px-4 py-4 sm:px-6 lg:p-0">
										{nav.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
}
