import Link from "next/link";

import ThemeSwitch from "../ThemeSwitcher";
import Widgets from "@/components/layout/Widgets";
import { TranslateNavLinks } from "../dynamic-translations/TranslateNavLink";

export default function Footer() {
	const mainNavLinks = TranslateNavLinks();
	return (
		<footer className="border-t border-t-zinc-200 dark:border-t-zinc-800 mt-auto py-6">
			<div className="container flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
				<div className="flex items-center gap-4">
					<ThemeSwitch />
				</div>
				<div>
					<nav>
						<ul className="flex flex-wrap justify-center lg:flex-nowrap lg:items-center gap-4">
							{mainNavLinks.map((nav) => {
								return (
									<li key={nav.hash}>
										<Link className="hover:text-custom-primary" href={nav.hash}>
											{nav.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div>
					<Widgets />
				</div>
			</div>
		</footer>
	);
}
