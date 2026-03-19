"use client";

import * as React from "react";
import { COMMANDS_LIST } from "./commands";
import { NeofetchOutput } from "./outputs";
import { TerminalWindow } from "./TerminalWindow";

export const Sidebar = React.memo(function Sidebar() {
	return (
		<TerminalWindow title="system info" className="w-full h-full">
			<div className="flex-1 p-5 overflow-y-auto">
				<div className="mb-8">
					<NeofetchOutput />
				</div>

				<div className="border-t border-zinc-800/60 pt-5">
					<div className="text-[11px] text-zinc-600 uppercase tracking-widest mb-3 font-medium">
						available commands
					</div>
					<div className="space-y-1.5">
						{COMMANDS_LIST.map(({ cmd, desc }) => (
							<div key={cmd} className="flex items-center text-[13px] group">
								<span className="text-[#7ebae4] w-24 group-hover:text-[#a3d4f5] transition-colors">
									{cmd}
								</span>
								<span className="text-zinc-600">{desc}</span>
							</div>
						))}
					</div>
				</div>

				<div className="border-t border-zinc-800/60 pt-5 mt-5">
					<div className="text-[11px] text-zinc-600 uppercase tracking-widest mb-3 font-medium">
						tips
					</div>
					<div className="text-[12px] text-zinc-600 space-y-1">
						<div>
							<span className="text-zinc-500">Tab</span> to autocomplete
						</div>
						<div>
							<span className="text-zinc-500">Arrow keys</span> for history
						</div>
						<div>
							<span className="text-zinc-500">Ctrl+L</span> to clear
						</div>
					</div>
				</div>
			</div>
		</TerminalWindow>
	);
});

