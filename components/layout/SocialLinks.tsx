import Link from "next/link";
import { socials } from "@/constants/data";

export default function SocialLinks() {
	const customStyles = {
		"--gradient-border-radius": "4px",
		"--gradient-inset-size": "-0.5rem",
	} as any;
	return (
		<ul className="flex items-center gap-4">
			{socials.map((item) => (
				<li key={item.label} className="gradient-border-parent" style={customStyles}>
					<Link
						href={item.href}
						// className="block bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg rounded-lg"
						className="gradient-border flex items-center justify-center h-8 w-8"
					>
						<item.icon className="text-zinc-700 dark:text-white" size={18} />
						<span className="sr-only">{item.label}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
