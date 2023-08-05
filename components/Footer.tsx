import { mainNavLinks } from "@/lib/data";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer className="border-t border-t-zinc-200 dark:border-t-zinc-800 mt-auto py-6">
			<div className="container flex items-center justify-between text-xs">
				<div className="flex items-center gap-4">
					<ThemeSwitch />
				</div>
				<div>
					<nav>
						<ul className="flex lg:items-center gap-4">
							{mainNavLinks.map((nav) => {
								return (
									<li key={nav.hash}>
										<Link href={nav.hash}>{nav.name}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div>
					<SocialLinks />
				</div>
			</div>
		</footer>
	);
}
