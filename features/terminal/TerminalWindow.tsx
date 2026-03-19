"use client";

import * as React from "react";

export const TerminalWindow = React.memo(function TerminalWindow({
	title,
	children,
	className = "",
}: {
	title: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`flex flex-col rounded-xl overflow-hidden bg-card text-foreground border border-border shadow-2xl shadow-black/10 dark:shadow-black/50 ${className}`}
		>
			<div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
					<div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
					<div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
				</div>
				<div className="flex-1 text-center">
					<span className="text-[12px] text-muted-foreground font-medium">
						{title}
					</span>
				</div>
				<div className="w-13" />
			</div>
			{children}
		</div>
	);
});

