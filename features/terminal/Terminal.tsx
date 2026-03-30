"use client";

import * as React from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MainTerminal } from "./MainTerminal";
import { Sidebar } from "./Sidebar";
import { TerminalLocaleProvider } from "./locale-context";

export const Terminal = React.memo(function Terminal() {
	return (
		<TerminalLocaleProvider>
		<div className="min-h-screen h-screen w-screen flex flex-col p-2 sm:p-4 lg:p-6 gap-2 sm:gap-4 bg-linear-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-[#0a0c10] dark:to-zinc-950">
			<div className="flex w-full h-full min-h-0 lg:hidden">
				<MainTerminal />
			</div>

			<div className="hidden lg:flex w-full flex-1 min-h-0">
				<ResizablePanelGroup
					direction="horizontal"
					className="w-full h-full min-h-0"
				>
					<ResizablePanel defaultSize={40} minSize={24} maxSize={60}>
						<div className="h-full min-h-0">
							<Sidebar />
						</div>
					</ResizablePanel>

					<ResizableHandle withHandle className="mx-3" />

					<ResizablePanel defaultSize={60} minSize={40}>
						<div className="h-full min-h-0">
							<MainTerminal />
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
		</TerminalLocaleProvider>
	);
});

