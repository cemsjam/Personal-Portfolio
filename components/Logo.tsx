import { cn } from "@/lib/utils";
import React from "react";

function Logo({ classes }: { classes?: string }) {
	return (
		<div className={cn("logo order-2 lg:order-none", classes)}>
			<span className="font-extrabold text-black dark:text-white">Cemre</span>{" "}
			<span className="font-bold dark:text-slate-300">Kur</span>
		</div>
	);
}

export default Logo;
