import * as React from "react";
import type { Locale } from "./messages";
import { messages } from "./messages";
import { useTerminalLocale } from "./locale-context";
import {
	ContactOutput,
	DateOutput,
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

export function getCommandsListStatic(
	locale: Locale,
): Array<{ cmd: string; desc: string }> {
	const msg = messages[locale];
	return [
		{ cmd: "whoami", desc: msg.cmdDesc_whoami },
		{ cmd: "skills", desc: msg.cmdDesc_skills },
		{ cmd: "contact", desc: msg.cmdDesc_contact },
		{ cmd: "theme", desc: msg.cmdDesc_theme },
		{ cmd: "lang", desc: msg.cmdDesc_lang },
		{ cmd: "clear", desc: msg.cmdDesc_clear },
	];
}

/** @deprecated use getCommandsListStatic(locale) */
export const COMMANDS_LIST = getCommandsListStatic("en");

function LsOutput() {
	const { t } = useTerminalLocale();
	return (
		<div className="text-[13px] text-zinc-500">{t("lsFake")}</div>
	);
}

function PwdOutput() {
	const { t } = useTerminalLocale();
	return <div className="text-[13px] text-zinc-500">{t("pwdFake")}</div>;
}

function SudoJokeOutput() {
	const { t } = useTerminalLocale();
	return <div className="text-[13px] text-zinc-500">{t("sudoNiceTry")}</div>;
}

function ExitJokeOutput() {
	const { t } = useTerminalLocale();
	return <div className="text-[13px] text-zinc-500">{t("exitNoEscape")}</div>;
}

function VimOutput() {
	return <div className="text-[13px] text-zinc-500">:q!</div>;
}

function NeovimJokeOutput() {
	const { t } = useTerminalLocale();
	return <div className="text-[13px] text-zinc-500">{t("nvimBtw")}</div>;
}

export function BuiltinCommandOutput({
	name,
}: {
	name: TerminalCommandKey;
}) {
	switch (name) {
		case "neofetch":
			return <NeofetchOutput compact />;
		case "whoami":
			return <WhoamiOutput />;
		case "skills":
			return <SkillsOutput />;
		case "contact":
			return <ContactOutput />;
		case "ls":
			return <LsOutput />;
		case "pwd":
			return <PwdOutput />;
		case "date":
			return <DateOutput />;
		case "sudo rm -rf /":
			return <SudoJokeOutput />;
		case "exit":
			return <ExitJokeOutput />;
		case "vim":
			return <VimOutput />;
		case "nvim":
			return <NeovimJokeOutput />;
		default:
			return null;
	}
}

const _keys: TerminalCommandKey[] = [
	"neofetch",
	"whoami",
	"skills",
	"contact",
	"ls",
	"pwd",
	"date",
	"sudo rm -rf /",
	"exit",
	"vim",
	"nvim",
];

export function isTerminalCommandKey(cmd: string): cmd is TerminalCommandKey {
	return (_keys as string[]).includes(cmd);
}
