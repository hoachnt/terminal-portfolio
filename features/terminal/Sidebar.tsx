"use client";

import * as React from "react";
import { getCommandsListStatic } from "./commands";
import { NeofetchOutput } from "./outputs";
import { TerminalWindow } from "./TerminalWindow";
import { useTerminalLocale } from "./locale-context";

export const Sidebar = React.memo(function Sidebar() {
	const { locale, t } = useTerminalLocale();
	const commandsList = React.useMemo(
		() => getCommandsListStatic(locale),
		[locale],
	);

	return (
		<TerminalWindow title={t("windowSystemInfo")} className="w-full h-full">
			<div className="flex-1 p-5 overflow-y-auto">
				<div className="mb-8">
					<NeofetchOutput />
				</div>

				<div className="border-t border-zinc-800/60 pt-5">
					<div className="text-[11px] text-zinc-600 uppercase tracking-widest mb-3 font-medium">
						{t("sidebarCommands")}
					</div>
					<div className="space-y-1.5">
						{commandsList.map(({ cmd, desc }) => (
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
						{t("sidebarTips")}
					</div>
					<div className="text-[12px] text-zinc-600 space-y-1">
						<div>
							<span className="text-zinc-500">Tab</span> {t("tipTab")}
						</div>
						<div>
							<span className="text-zinc-500">Arrow keys</span> {t("tipArrows")}
						</div>
						<div>
							<span className="text-zinc-500">Ctrl+L</span> {t("tipCtrlL")}
						</div>
					</div>
				</div>
			</div>
		</TerminalWindow>
	);
});
