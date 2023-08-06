import React from "react";
import Link from "next/link";

import { mainNavLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function NavigationLinks({ classes }: { classes?: string }) {
	return (
		<nav className={cn("block", classes)}>
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
	);
}
