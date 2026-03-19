import * as React from "react";
import {
	ContactOutput,
	NeofetchOutput,
	SkillsOutput,
	WhoamiOutput,
} from "./outputs";

export type TerminalCommandKey =
	| "neofetch"
	| "whoami"
	| "skills"
	| "contact"
	| "ls"
	| "pwd"
	| "date"
	| "sudo rm -rf /"
	| "exit"
	| "vim"
	| "nvim";

export const COMMANDS_LIST: Array<{ cmd: string; desc: string }> = [
	{ cmd: "whoami", desc: "about me" },
	{ cmd: "skills", desc: "tech stack" },
	// { cmd: "projects", desc: "my work" },
	{ cmd: "contact", desc: "reach out" },
	// { cmd: "experience", desc: "work history" },
	// { cmd: "education", desc: "background" },
	{ cmd: "theme", desc: "change theme (light | dark | system)" },
	{ cmd: "clear", desc: "clear screen" },
];

export const COMMANDS: Record<TerminalCommandKey, React.ReactNode> = {
	neofetch: <NeofetchOutput compact />,
	whoami: <WhoamiOutput />,
	skills: <SkillsOutput />,
	contact: <ContactOutput />,
	ls: (
		<div className="text-[13px] text-zinc-500">projects/ skills/ README.md</div>
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

