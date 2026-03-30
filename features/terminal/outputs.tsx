import * as React from "react";
import { dateLocaleFor } from "./messages";
import { useTerminalLocale } from "./locale-context";

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

export const Link = React.memo(function Link({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
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
});

export const NeofetchOutput = React.memo(function NeofetchOutput({
	compact = false,
}: {
	compact?: boolean;
}) {
	const { t } = useTerminalLocale();
	return (
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
					<span className="text-[#7ebae4]">{t("neofetchUser")}</span>
					<span className="text-zinc-600">@</span>
					<span className="text-[#5277c3]">hoachnt</span>
				</div>
				<div className="text-zinc-700">──────────────────</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchOs")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">NixOS 25.11</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchHost")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">Portfolio v1.0</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchUptime")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">{t("neofetchUptimeValue")}</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchShell")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">bash</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchWm")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">Hyprland</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchEditor")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">neovim</span>
				</div>
				<div>
					<span className="text-[#5277c3]">{t("neofetchTerminal")}</span>
					<span className="text-zinc-700 mx-2">~</span>
					<span className="text-zinc-400">kitty</span>
				</div>
			</div>
		</div>
	);
});

export const WhoamiOutput = React.memo(function WhoamiOutput() {
	const { t } = useTerminalLocale();
	return (
		<div className="text-[12px] sm:text-[13px] space-y-2">
			<div className="dark:text-zinc-100 text-zinc-900 font-medium">
				Nguyen Tien Hoach
			</div>
			<div className="text-[#7ebae4]">{t("whoamiRole")}</div>
			<div className="text-zinc-500 max-w-md leading-relaxed">{t("whoamiBio")}</div>
			<div className="text-zinc-600">
				{t("whoamiLocation")} {t("whoamiLocationValue")}
			</div>
		</div>
	);
});

export const SkillsOutput = React.memo(function SkillsOutput() {
	const { t } = useTerminalLocale();
	return (
		<div className="text-[12px] sm:text-[13px] space-y-2">
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsLanguages")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">TypeScript, Python, Nix, Go</span>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsFrontend")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">React, Astro, Vue, Angular</span>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsBackend")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">PostgreSQL, Redis, GCS, Caddy</span>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsDevops")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">Docker, Kubernetes</span>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsSystems")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">NixOS, Linux, Ununtu, Fedora</span>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("skillsTools")}</span>
				<span className="text-zinc-700 mx-2">/</span>
				<span className="text-zinc-400">Neovim, Git, Hyprland</span>
			</div>
		</div>
	);
});

export const ContactOutput = React.memo(function ContactOutput() {
	const { t } = useTerminalLocale();
	return (
		<div className="text-[12px] sm:text-[13px] space-y-1.5">
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("contactEmail")}</span>
				<span className="text-zinc-700 mx-2">~</span>
				<Link href="mailto:hello@hoachprogrammer@gmail.com">
					hello@hoachprogrammer@gmail.com
				</Link>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("contactGithub")}</span>
				<span className="text-zinc-700 mx-2">~</span>
				<Link href="github.com/hoachnt">github.com/hoachnt</Link>
			</div>
			<div className="flex flex-wrap">
				<span className="text-[#5277c3]">{t("contactLinkedin")}</span>
				<span className="text-zinc-700 mx-2">~</span>
				<Link href="linkedin.com/in/hoachnt">linkedin.com/in/hoachnt</Link>
			</div>
		</div>
	);
});

export const DateOutput = React.memo(function DateOutput() {
	const { locale } = useTerminalLocale();
	const formatted = React.useMemo(() => {
		return new Date().toLocaleDateString(dateLocaleFor(locale), {
			weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	}, [locale]);
	return <div className="text-[13px] text-zinc-500">{formatted}</div>;
});
