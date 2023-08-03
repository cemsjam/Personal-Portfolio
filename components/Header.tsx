import Link from "next/link";
import MainNavigation from "./MainNavigation";
import { socials } from "@/lib/data";

function Header() {
	return (
		<header>
			<div className="container flex items-center justify-between h-16">
				<div className="logo order-2 lg:-order-none">logo</div>
				<MainNavigation />
				<ul className="flex items-center gap-4 order-3 lg:order-none">
					{socials.map((item) => (
						<li key={item.label}>
							<Link
								href={item.href}
								className="block bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg rounded-lg"
							>
								<item.icon className="text-white" />
								<span className="sr-only">{item.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}

export default Header;
