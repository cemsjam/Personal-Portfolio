import Link from "next/link";
import { TranslateSocialLinks } from "@/components/dynamic-translations/TranslateSocialLink";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const socialLinkCustomStylesForGradient = {
	"--gradient-border-radius": "4px",
	"--gradient-inset-size": "-0.5rem",
} as any;
export default function Widgets() {
	const socials = TranslateSocialLinks();
	return (
		<ul className="flex items-center gap-4">
			<li>
				<LanguageSwitcher />
			</li>
			{socials.map((item) => (
				<li key={item.label} className="gradient-border-parent" style={socialLinkCustomStylesForGradient}>
					<Link
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						title={item.label}
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
