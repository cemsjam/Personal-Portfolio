import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({ classes }: { classes?: string }) {
	return (
		<Link href={"/"} className={cn("logo order-2 lg:order-none", classes)}>
			<span className="font-extrabold text-black dark:text-white">Cemre</span>{" "}
			<span className="font-bold dark:text-slate-300">Kur</span>
		</Link>
	);
}

export default Logo;
