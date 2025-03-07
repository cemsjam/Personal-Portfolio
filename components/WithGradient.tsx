import React from "react";

const WithGradient = ({ children, borderRadius = "8px" }: { children: React.ReactNode; borderRadius?: string }) => {
	return (
		<div className="gradient-border-parent" style={{ "--gradient-border-radius": borderRadius } as React.CSSProperties}>
			<div className="gradient-border" style={{ "--gradient-border-radius": borderRadius } as React.CSSProperties}>
				{children}
			</div>
		</div>
	);
};

export default WithGradient;
