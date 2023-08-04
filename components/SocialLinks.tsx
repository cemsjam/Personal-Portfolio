import Link from "next/link";

import { socials } from "@/lib/data";

export default function SocialLinks() {
	return (
		<ul className="flex items-center gap-4">
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
	);
}
