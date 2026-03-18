"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

const NIXOS_ASCII = `      ▗▄▄▄       ▗▄▄▄▄    ▄▄▄▖
      ▜███▙       ▜███▙  ▟███▛
       ▜███▙       ▜███▙▟███▛
        ▜███▙       ▜██████▛
 ▟█████████████████▙ ▜████▛     ▟▙
▟███████████████████▙ ▜███▙    ▟██▙
       ▄▄▄▄▖           ▜███▙  ▟███▛
      ▟███▛             ▜██▛ ▟███▛
     ▟███▛               ▜▛ ▟███▛
▗███████▛                  ▟██████▙
▜██████▛                  ▟████████▛
  ▟███▛ ▟▙               ▟███▛
 ▟███▛ ▟██▙             ▟███▛
▟███▛  ▜███▙           ▝▀▀▀▀
▜██▛    ▜███▙ ▜██████████████████▛
 ▜▛     ▟████▙ ▜████████████████▛
       ▟██████▙       ▜███▙
      ▟███▛▜███▙       ▜███▙
     ▟███▛  ▜███▙       ▜███▙
     ▝▀▀▀    ▀▀▀▀▘       ▀▀▀▘`;

interface CommandOutput {
	command: string;
	output: React.ReactNode;
}

const Link = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={
			href.startsWith("http") || href.startsWith("mailto:")
				? href
				: `https://${href}`
		}
		target="_blank"
		rel="noopener noreferrer"
		className="text-[#7ebae4] hover:text-[#a3d4f5] hover:underline underline-offset-2 transition-colors"
	>
		{children}
	</a>
);

const NeofetchOutput = ({ compact = false }: { compact?: boolean }) => (
	<div
		className={`flex ${compact ? "flex-col gap-3" : "flex-col sm:flex-row gap-3 sm:gap-6"}`}
	>
		<pre
			className={`text-[#7ebae4] ${compact ? "text-[7px]" : "text-[7px] sm:text-[9px]"} leading-[1.15] select-none shrink-0`}
		>
			{NIXOS_ASCII}
		</pre>
		<div
			className={`${compact ? "text-[12px]" : "text-[12px] sm:text-[13px]"} leading-relaxed`}
		>
			<div>
				<span className="text-[#7ebae4]">user</span>
				<span className="text-zinc-600">@</span>
				<span className="text-[#5277c3]">hoachnt</span>
			</div>
			<div className="text-zinc-700">──────────────────</div>
			<div>
				<span className="text-[#5277c3]">OS</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">NixOS 25.11</span>
			</div>
			<div>
				<span className="text-[#5277c3]">Host</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">Portfolio v1.0</span>
			</div>
			<div>
				<span className="text-[#5277c3]">Uptime</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">forever</span>
			</div>
			<div>
				<span className="text-[#5277c3]">Shell</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">bash</span>
			</div>
			<div>
				<span className="text-[#5277c3]">WM</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">Hyprland</span>
			</div>
			<div>
				<span className="text-[#5277c3]">Editor</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">neovim</span>
			</div>
			<div>
				<span className="text-[#5277c3]">Terminal</span>
				<span className="text-zinc-700 mx-2">~</span>
				<span className="text-zinc-400">kitty</span>
			</div>
		</div>
	</div>
);

const COMMANDS_LIST = [
	{ cmd: "whoami", desc: "about me" },
	{ cmd: "skills", desc: "tech stack" },
	// { cmd: "projects", desc: "my work" },
	{ cmd: "contact", desc: "reach out" },
	// { cmd: "experience", desc: "work history" },
	// { cmd: "education", desc: "background" },
	{ cmd: "clear", desc: "clear screen" },
];

const WhoamiOutput = () => (
	<div className="text-[12px] sm:text-[13px] space-y-2">
		<div className="text-zinc-100 font-medium">Nguyen Tien Hoach</div>
		<div className="text-[#7ebae4]">Full-Stack Developer</div>
		<div className="text-zinc-500 max-w-md leading-relaxed">
			Software engineer specializing in developing scalable web
			applications and system architectures. I love the declarative nature
			of NixOS. Terminal enthusiast. Open source contributor.
		</div>
		<div className="text-zinc-600">Location: Hanoi</div>
	</div>
);

const SkillsOutput = () => (
	<div className="text-[12px] sm:text-[13px] space-y-2">
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">languages</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">TypeScript, Python, Nix, Go</span>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">frontend</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">React, Astro, Vue, Angular</span>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">backend</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">PostgreSQL, Redis, GCS, Caddy</span>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">devops</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">Docker, Kubernetes</span>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">systems</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">NixOS, Linux, Ununtu, Fedora</span>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">tools</span>
			<span className="text-zinc-700 mx-2">/</span>
			<span className="text-zinc-400">Neovim, Git, Hyprland</span>
		</div>
	</div>
);

// const ProjectsOutput = () => (
// 	<div className="text-[12px] sm:text-[13px] space-y-3">
// 		<div>
// 			<div className="text-zinc-200">nixos-config</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				My NixOS configuration with flakes
// 			</div>
// 			<Link href="github.com/username/nixos-config">
// 				github.com/username/nixos-config
// 			</Link>
// 		</div>
// 		<div>
// 			<div className="text-zinc-200">cli-tool</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				Rust CLI for automation
// 			</div>
// 			<Link href="github.com/username/cli-tool">
// 				github.com/username/cli-tool
// 			</Link>
// 		</div>
// 		<div>
// 			<div className="text-zinc-200">web-terminal</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				This portfolio website
// 			</div>
// 			<Link href="github.com/username/portfolio">
// 				github.com/username/portfolio
// 			</Link>
// 		</div>
// 	</div>
// );

const ContactOutput = () => (
	<div className="text-[12px] sm:text-[13px] space-y-1.5">
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">email</span>
			<span className="text-zinc-700 mx-2">~</span>
			<Link href="mailto:hello@hoachprogrammer@gmail.com">
				hello@hoachprogrammer@gmail.com
			</Link>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">github</span>
			<span className="text-zinc-700 mx-2">~</span>
			<Link href="github.com/hoachnt">github.com/hoachnt</Link>
		</div>
		<div className="flex flex-wrap">
			<span className="text-[#5277c3]">linkedin</span>
			<span className="text-zinc-700 mx-2">~</span>
			<Link href="linkedin.com/in/hoachnt">linkedin.com/in/hoachnt</Link>
		</div>
	</div>
);

// const ExperienceOutput = () => (
// 	<div className="text-[12px] sm:text-[13px] space-y-3">
// 		<div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				2023 - present
// 			</div>
// 			<div className="text-zinc-200">Senior Developer @ Company</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				Microservices architecture, NixOS CI/CD
// 			</div>
// 		</div>
// 		<div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				2021 - 2023
// 			</div>
// 			<div className="text-zinc-200">Middle Developer @ Startup</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				Full-stack React + Node.js
// 			</div>
// 		</div>
// 		<div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				2019 - 2021
// 			</div>
// 			<div className="text-zinc-200">Junior Developer @ Agency</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				Frontend development
// 			</div>
// 		</div>
// 	</div>
// );

// const EducationOutput = () => (
// 	<div className="text-[12px] sm:text-[13px] space-y-2">
// 		<div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				2019 - 2023
// 			</div>
// 			<div className="text-zinc-200">University</div>
// 			<div className="text-zinc-600 text-[11px] sm:text-[12px]">
// 				Computer Science, BS
// 			</div>
// 		</div>
// 	</div>
// );

const COMMANDS: Record<string, React.ReactNode> = {
	neofetch: <NeofetchOutput compact />,
	whoami: <WhoamiOutput />,
	skills: <SkillsOutput />,
	// projects: <ProjectsOutput />,
	contact: <ContactOutput />,
	// experience: <ExperienceOutput />,
	// education: <EducationOutput />,
	ls: (
		<div className="text-[13px] text-zinc-500">
			projects/ skills/ README.md
		</div>
	),
	pwd: <div className="text-[13px] text-zinc-500">/home/user</div>,
	date: (
		<div className="text-[13px] text-zinc-500">
			{new Date().toLocaleDateString("en-US", {
				weekday: "short",
				year: "numeric",
				month: "short",
				day: "numeric",
			})}
		</div>
	),
	"sudo rm -rf /": <div className="text-[13px] text-zinc-500">nice try</div>,
	exit: <div className="text-[13px] text-zinc-500">there is no escape</div>,
	vim: <div className="text-[13px] text-zinc-500">:q!</div>,
	nvim: <div className="text-[13px] text-zinc-500">btw i use neovim</div>,
};

function TerminalWindow({
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
			className={`flex flex-col rounded-xl overflow-hidden bg-[#0d0f12] border border-zinc-800/60 shadow-2xl shadow-black/50 ${className}`}
		>
			{/* Title bar - Warp style */}
			<div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-zinc-800/40 to-zinc-900/40 border-b border-zinc-800/60">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
					<div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
					<div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
				</div>
				<div className="flex-1 text-center">
					<span className="text-[12px] text-zinc-500 font-medium">
						{title}
					</span>
				</div>
				<div className="w-13" />
			</div>
			{children}
		</div>
	);
}

function Sidebar() {
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
							<div
								key={cmd}
								className="flex items-center text-[13px] group"
							>
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
							<span className="text-zinc-500">Tab</span> to
							autocomplete
						</div>
						<div>
							<span className="text-zinc-500">Arrow keys</span>{" "}
							for history
						</div>
						<div>
							<span className="text-zinc-500">Ctrl+L</span> to
							clear
						</div>
					</div>
				</div>
			</div>
		</TerminalWindow>
	);
}

function MainTerminal() {
	const [history, setHistory] = useState<CommandOutput[]>([]);
	const [currentCommand, setCurrentCommand] = useState("");
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isReady, setIsReady] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const init = async () => {
			await new Promise((resolve) => setTimeout(resolve, 100));
			setIsReady(true);
		};
		init();
	}, []);

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history]);

	useEffect(() => {
		if (isReady) {
			inputRef.current?.focus();
		}
		if (isReady && history.length === 0) {
			handleCommand("whoami");
		}
	}, [isReady]);

	const handleCommand = (cmd: string) => {
		const trimmedCmd = cmd.trim().toLowerCase();
		if (trimmedCmd === "") return;

		setCommandHistory((prev) => [...prev, cmd]);
		setHistoryIndex(-1);

		if (trimmedCmd === "clear") {
			setHistory([]);
			return;
		}

		if (trimmedCmd === "help") {
			setHistory((prev) => [
				...prev,
				{
					command: cmd,
					output: (
						<div className="text-[13px] space-y-1">
							{COMMANDS_LIST.map(({ cmd: c, desc }) => (
								<div key={c}>
									<span className="text-[#7ebae4]">{c}</span>
									<span className="text-zinc-700 mx-2">
										-
									</span>
									<span className="text-zinc-500">
										{desc}
									</span>
								</div>
							))}
						</div>
					),
				},
			]);
			return;
		}

		const commandResult = COMMANDS[trimmedCmd];

		if (commandResult) {
			setHistory((prev) => [
				...prev,
				{ command: cmd, output: commandResult },
			]);
		} else {
			setHistory((prev) => [
				...prev,
				{
					command: cmd,
					output: (
						<div className="text-[13px] text-zinc-500">
							command not found: {cmd}
						</div>
					),
				},
			]);
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleCommand(currentCommand);
			setCurrentCommand("");
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (commandHistory.length > 0) {
				const newIndex =
					historyIndex === -1
						? commandHistory.length - 1
						: Math.max(0, historyIndex - 1);
				setHistoryIndex(newIndex);
				setCurrentCommand(commandHistory[newIndex]);
			}
		} else if (e.key === "ArrowDown") {
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
		} else if (e.key === "Tab") {
			e.preventDefault();
			const allCommands = [...Object.keys(COMMANDS), "help", "clear"];
			const matches = allCommands.filter((c) =>
				c.startsWith(currentCommand.toLowerCase()),
			);
			if (matches.length === 1) {
				setCurrentCommand(matches[0]);
			}
		} else if (e.key === "l" && e.ctrlKey) {
			e.preventDefault();
			setHistory([]);
		}
	};

	return (
		<TerminalWindow title="~/portfolio" className="w-full h-full">
			<div
				ref={terminalRef}
				onClick={() => inputRef.current?.focus()}
				className="flex-1 p-3 sm:p-5 overflow-y-auto cursor-text min-h-0"
			>
				{/* Mobile: show neofetch on start */}
				<div className="lg:hidden mb-6">
					<NeofetchOutput compact />
					<div className="mt-4 text-[11px] sm:text-[12px] text-zinc-600">
						type <span className="text-[#7ebae4]">help</span> to see
						commands
					</div>
				</div>

				{history.length === 0 && (
					<div className="hidden lg:block text-[13px] text-zinc-600 mb-4">
						type <span className="text-[#7ebae4]">help</span> to see
						commands
					</div>
				)}

				{history.map((item, index) => (
					<div key={index} className="mb-4 sm:mb-5">
						<div className="flex items-center gap-2 text-[12px] sm:text-[13px] mb-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-zinc-900/50 rounded-lg border border-zinc-800/40">
							<span className="text-[#7ebae4]">$</span>
							<span className="text-zinc-300 break-all">
								{item.command}
							</span>
						</div>
						<div className="pl-1">{item.output}</div>
					</div>
				))}

				{isReady && (
					<div className="flex items-center gap-2 text-[12px] sm:text-[13px] px-2 sm:px-3 py-1.5 sm:py-2 bg-zinc-900/30 rounded-lg border border-zinc-800/40 focus-within:border-[#5277c3]/50 focus-within:bg-zinc-900/50 transition-all">
						<span className="text-[#7ebae4]">$</span>
						<input
							ref={inputRef}
							type="text"
							value={currentCommand}
							onChange={(e) => setCurrentCommand(e.target.value)}
							onKeyDown={handleKeyDown}
							className="flex-1 bg-transparent outline-none text-zinc-200 caret-[#7ebae4] placeholder:text-zinc-700 min-w-0"
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
}

export function Terminal() {
	return (
		<div className="min-h-screen h-screen w-screen flex flex-col lg:flex-row p-2 sm:p-4 lg:p-6 gap-2 sm:gap-4 lg:gap-6 bg-gradient-to-br from-zinc-950 via-[#0a0c10] to-zinc-950">
			<div className="hidden lg:flex w-1/2 h-full">
				<Sidebar />
			</div>
			<div className="flex w-full lg:w-1/2 h-full min-h-0 flex-1">
				<MainTerminal />
			</div>
		</div>
	);
}
