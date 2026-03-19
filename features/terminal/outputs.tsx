import * as React from "react";

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
});

export const WhoamiOutput = React.memo(function WhoamiOutput() {
	return (
		<div className="text-[12px] sm:text-[13px] space-y-2">
			<div className="dark:text-zinc-100 text-zinc-900 font-medium">
				Nguyen Tien Hoach
			</div>
			<div className="text-[#7ebae4]">Full-Stack Developer</div>
			<div className="text-zinc-500 max-w-md leading-relaxed">
				Software engineer specializing in developing scalable web
				applications and system architectures. I love the declarative nature
				of NixOS. Terminal enthusiast. Open source contributor.
			</div>
			<div className="text-zinc-600">Location: Hanoi</div>
		</div>
	);
});

export const SkillsOutput = React.memo(function SkillsOutput() {
	return (
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
});

export const ContactOutput = React.memo(function ContactOutput() {
	return (
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
});

