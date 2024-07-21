"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { TranslateNavLinks } from "../../TranslateNavLink";

type NavigationLinksProps = {
	classes?: string;
	desktop?: boolean;
};

export default function NavigationLinks({ classes, desktop = false }: NavigationLinksProps) {
	const mainNavLinks = TranslateNavLinks();
	return (
		<nav className={cn("block", classes)}>
			<ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
				{mainNavLinks.map((nav) => {
					return (
						<li key={nav.hash}>
							<Link
								href="test"
								className={cn("block w-full px-4 py-4 sm:px-6", {
									"lg:px-3 lg:py-2 t-hover-bg-color rounded-md hover:text-zinc-600 hover:dark:text-zinc-50 transition-colors":
										desktop,
								})}
							>
								{nav.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
