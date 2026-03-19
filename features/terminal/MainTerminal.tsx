"use client";

import * as React from "react";
import type { KeyboardEvent } from "react";
import { useTheme } from "next-themes";
import { COMMANDS, COMMANDS_LIST } from "./commands";
import { NeofetchOutput } from "./outputs";
import { ThemeRippleOverlay } from "./ThemeRippleOverlay";
import { TerminalWindow } from "./TerminalWindow";
import { usePrefersDarkColorScheme, usePrefersReducedMotion } from "./hooks";

interface CommandOutput {
	id: number;
	command: string;
	output: React.ReactNode;
}

function getThemeBaseColor({
	target,
	prefersDark,
}: {
	target: "light" | "dark" | "system";
	prefersDark: boolean;
}) {
	if (target === "dark") return "rgb(9 9 11)";
	if (target === "light") return "rgb(250 250 250)";
	return prefersDark ? "rgb(9 9 11)" : "rgb(250 250 250)";
}

export const MainTerminal = React.memo(function MainTerminal() {
	const [history, setHistory] = React.useState<CommandOutput[]>([]);
	const [currentCommand, setCurrentCommand] = React.useState("");
	const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = React.useState(-1);
	const [isReady, setIsReady] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const terminalRef = React.useRef<HTMLDivElement>(null);
	const nextHistoryId = React.useRef(1);
	const initRanRef = React.useRef(false);

	const { setTheme } = useTheme();
	const prefersReducedMotion = usePrefersReducedMotion();
	const prefersDark = usePrefersDarkColorScheme();

	const [themeRipple, setThemeRipple] = React.useState<null | {
		key: number;
		targetTheme: "light" | "dark" | "system";
	}>(null);

	const themeTimeoutsRef = React.useRef<number[]>([]);
	React.useEffect(() => {
		return () => {
			for (const id of themeTimeoutsRef.current) window.clearTimeout(id);
			themeTimeoutsRef.current = [];
		};
	}, []);

	const baseColor = React.useMemo(() => {
		return themeRipple
			? getThemeBaseColor({ target: themeRipple.targetTheme, prefersDark })
			: null;
	}, [prefersDark, themeRipple]);

	const allCommands = React.useMemo(() => {
		return [...Object.keys(COMMANDS), "help", "clear", "theme"];
	}, []);

	const runThemeRipple = React.useCallback(
		(target: "light" | "dark" | "system") => {
			if (prefersReducedMotion) {
				setTheme(target);
				return;
			}

			const key = Date.now();
			setThemeRipple({ key, targetTheme: target });

			themeTimeoutsRef.current.push(
				window.setTimeout(() => setTheme(target), 880),
				window.setTimeout(() => setThemeRipple(null), 1600),
			);
		},
		[prefersReducedMotion, setTheme],
	);

	const appendHistory = React.useCallback(
		(command: string, output: React.ReactNode) => {
			const id = nextHistoryId.current++;
			setHistory((prev) => [...prev, { id, command, output }]);
		},
		[],
	);

	const handleCommand = React.useCallback(
		(cmd: string) => {
			const trimmedCmd = cmd.trim().toLowerCase();
			if (trimmedCmd === "") return;

			setCommandHistory((prev) => [...prev, cmd]);
			setHistoryIndex(-1);

			if (trimmedCmd.startsWith("theme")) {
				const [, value] = trimmedCmd.split(" ");

				if (!value) {
					appendHistory(
						cmd,
						<div className="text-[13px] text-zinc-500">
							usage: theme [light | dark | system]
						</div>,
					);
					return;
				}

				if (value === "light" || value === "dark" || value === "system") {
					runThemeRipple(value);
					appendHistory(
						cmd,
						<div className="text-[13px] text-zinc-500">
							theme set to {value}
						</div>,
					);
				} else {
					appendHistory(
						cmd,
						<div className="text-[13px] text-zinc-500">
							invalid theme: {value}
						</div>,
					);
				}
				return;
			}

			if (trimmedCmd === "clear") {
				setHistory([]);
				return;
			}

			if (trimmedCmd === "help") {
				appendHistory(
					cmd,
					<div className="text-[13px] space-y-1">
						{COMMANDS_LIST.map(({ cmd: c, desc }) => (
							<div key={c}>
								<span className="text-[#7ebae4]">{c}</span>
								<span className="text-zinc-700 mx-2">-</span>
								<span className="text-zinc-500">{desc}</span>
							</div>
						))}
					</div>,
				);
				return;
			}

			const commandResult = (COMMANDS as Record<string, React.ReactNode>)[
				trimmedCmd
			];

			if (commandResult) {
				appendHistory(cmd, commandResult);
			} else {
				appendHistory(
					cmd,
					<div className="text-[13px] text-zinc-500">
						command not found: {cmd}
					</div>,
				);
			}
		},
		[appendHistory, runThemeRipple],
	);

	const handleKeyDown = React.useCallback(
		(e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter") {
				handleCommand(currentCommand);
				setCurrentCommand("");
				return;
			}

			if (e.key === "ArrowUp") {
				e.preventDefault();
				if (commandHistory.length > 0) {
					const newIndex =
						historyIndex === -1
							? commandHistory.length - 1
							: Math.max(0, historyIndex - 1);
					setHistoryIndex(newIndex);
					setCurrentCommand(commandHistory[newIndex]);
				}
				return;
			}

			if (e.key === "ArrowDown") {
				e.preventDefault();
				if (historyIndex !== -1) {
					const newIndex = historyIndex + 1;
					if (newIndex >= commandHistory.length) {
						setHistoryIndex(-1);
						setCurrentCommand("");
					} else {
						setHistoryIndex(newIndex);
						setCurrentCommand(commandHistory[newIndex]);
					}
				}
				return;
			}

			if (e.key === "Tab") {
				e.preventDefault();
				const q = currentCommand.toLowerCase();
				const matches = allCommands.filter((c) => c.startsWith(q));
				if (matches.length === 1) {
					setCurrentCommand(matches[0]);
				}
				return;
			}

			if (e.key === "l" && e.ctrlKey) {
				e.preventDefault();
				setHistory([]);
			}
		},
		[
			allCommands,
			commandHistory,
			currentCommand,
			handleCommand,
			historyIndex,
		],
	);

	React.useEffect(() => {
		const init = async () => {
			await new Promise((resolve) => setTimeout(resolve, 100));
			setIsReady(true);
		};
		init();
	}, []);

	React.useLayoutEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history.length]);

	React.useEffect(() => {
		if (!isReady) return;
		inputRef.current?.focus();
		if (history.length === 0 && !initRanRef.current) {
			initRanRef.current = true;
			handleCommand("whoami");
		}
	}, [handleCommand, history.length, isReady]);

	return (
		<TerminalWindow title="~/portfolio" className="w-full h-full">
			{themeRipple && baseColor && (
				<ThemeRippleOverlay key={themeRipple.key} baseColor={baseColor} />
			)}

			<div
				ref={terminalRef}
				onClick={() => inputRef.current?.focus()}
				className="flex-1 p-3 sm:p-5 overflow-y-auto cursor-text min-h-0"
			>
				<div className="lg:hidden mb-6">
					<NeofetchOutput compact />
					<div className="mt-4 text-[11px] sm:text-[12px] text-zinc-600">
						type <span className="text-[#7ebae4]">help</span> to see commands
					</div>
				</div>

				{history.length === 0 && (
					<div className="hidden lg:block text-[13px] text-zinc-600 mb-4">
						type <span className="text-[#7ebae4]">help</span> to see commands
					</div>
				)}

				{history.map((item) => (
					<div key={item.id} className="mb-4 sm:mb-5">
						<div className="flex items-center gap-2 text-[12px] sm:text-[13px] mb-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-muted/40 rounded-lg border border-border">
							<span className="text-[#7ebae4]">$</span>
							<span className="text-foreground/90 break-all">
								{item.command}
							</span>
						</div>
						<div className="pl-1">{item.output}</div>
					</div>
				))}

				{isReady && (
					<div className="flex items-center gap-2 text-[12px] sm:text-[13px] px-2 sm:px-3 py-1.5 sm:py-2 bg-muted/20 rounded-lg border border-border focus-within:border-[#5277c3]/50 focus-within:bg-muted/40 transition-all">
						<span className="text-[#7ebae4]">$</span>
						<input
							ref={inputRef}
							type="text"
							value={currentCommand}
							onChange={(e) => setCurrentCommand(e.target.value)}
							onKeyDown={handleKeyDown}
							className="flex-1 bg-transparent outline-none text-foreground caret-[#7ebae4] placeholder:text-muted-foreground min-w-0"
							placeholder="type a command..."
							spellCheck={false}
							autoComplete="off"
							autoCapitalize="off"
						/>
					</div>
				)}
			</div>
		</TerminalWindow>
	);
});

