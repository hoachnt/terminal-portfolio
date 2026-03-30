export type Locale = "en" | "ru" | "vn";

export const LOCALES: Locale[] = ["en", "ru", "vn"];

export const LOCALE_LABEL: Record<Locale, string> = {
	en: "English",
	ru: "Русский",
	vn: "Tiếng Việt",
};

export type MessageId =
	| "windowPortfolio"
	| "windowSystemInfo"
	| "placeholderInput"
	| "hintTypeHelp"
	| "hintHelpRest"
	| "neofetchUser"
	| "neofetchOs"
	| "neofetchHost"
	| "neofetchUptime"
	| "neofetchShell"
	| "neofetchWm"
	| "neofetchEditor"
	| "neofetchTerminal"
	| "neofetchUptimeValue"
	| "whoamiRole"
	| "whoamiBio"
	| "whoamiLocation"
	| "whoamiLocationValue"
	| "skillsLanguages"
	| "skillsFrontend"
	| "skillsBackend"
	| "skillsDevops"
	| "skillsSystems"
	| "skillsTools"
	| "contactEmail"
	| "contactGithub"
	| "contactLinkedin"
	| "sidebarCommands"
	| "sidebarTips"
	| "tipTab"
	| "tipArrows"
	| "tipCtrlL"
	| "cmdDesc_whoami"
	| "cmdDesc_skills"
	| "cmdDesc_contact"
	| "cmdDesc_theme"
	| "cmdDesc_lang"
	| "cmdDesc_clear"
	| "themeUsage"
	| "themeSet"
	| "themeInvalid"
	| "langUsage"
	| "langSet"
	| "langInvalid"
	| "commandNotFound"
	| "sudoNiceTry"
	| "exitNoEscape"
	| "nvimBtw"
	| "lsFake"
	| "pwdFake";

export const messages: Record<Locale, Record<MessageId, string>> = {
	en: {
		windowPortfolio: "~/portfolio",
		windowSystemInfo: "system info",
		placeholderInput: "type a command...",
		hintTypeHelp: "type",
		hintHelpRest: "to see commands",
		neofetchUser: "user",
		neofetchOs: "OS",
		neofetchHost: "Host",
		neofetchUptime: "Uptime",
		neofetchShell: "Shell",
		neofetchWm: "WM",
		neofetchEditor: "Editor",
		neofetchTerminal: "Terminal",
		neofetchUptimeValue: "forever",
		whoamiRole: "Full-Stack Developer",
		whoamiBio:
			"Software engineer specializing in developing scalable web applications and system architectures. I love the declarative nature of NixOS. Terminal enthusiast. Open source contributor.",
		whoamiLocation: "Location:",
		whoamiLocationValue: "Hanoi",
		skillsLanguages: "languages",
		skillsFrontend: "frontend",
		skillsBackend: "backend",
		skillsDevops: "devops",
		skillsSystems: "systems",
		skillsTools: "tools",
		contactEmail: "email",
		contactGithub: "github",
		contactLinkedin: "linkedin",
		sidebarCommands: "available commands",
		sidebarTips: "tips",
		tipTab: "to autocomplete",
		tipArrows: "for history",
		tipCtrlL: "to clear",
		cmdDesc_whoami: "about me",
		cmdDesc_skills: "tech stack",
		cmdDesc_contact: "reach out",
		cmdDesc_theme: "change theme (light | dark | system)",
		cmdDesc_lang: "language (en | ru | vn)",
		cmdDesc_clear: "clear screen",
		themeUsage: "usage: theme [light | dark | system]",
		themeSet: "theme set to",
		themeInvalid: "invalid theme:",
		langUsage: "usage: lang [en | ru | vn]",
		langSet: "language set to",
		langInvalid: "invalid language:",
		commandNotFound: "command not found:",
		sudoNiceTry: "nice try",
		exitNoEscape: "there is no escape",
		nvimBtw: "btw i use neovim",
		lsFake: "projects/ skills/ README.md",
		pwdFake: "/home/user",
	},
	ru: {
		windowPortfolio: "~/portfolio",
		windowSystemInfo: "системная информация",
		placeholderInput: "введите команду...",
		hintTypeHelp: "введите",
		hintHelpRest: "чтобы увидеть команды",
		neofetchUser: "пользователь",
		neofetchOs: "ОС",
		neofetchHost: "Хост",
		neofetchUptime: "Аптайм",
		neofetchShell: "Шелл",
		neofetchWm: "Оконный менеджер",
		neofetchEditor: "Редактор",
		neofetchTerminal: "Терминал",
		neofetchUptimeValue: "вечно",
		whoamiRole: "Full-Stack разработчик",
		whoamiBio:
			"Инженер ПО, специализируюсь на масштабируемых веб-приложениях и системной архитектуре. Люблю декларативность NixOS. Энтузиаст терминала. Участник open source.",
		whoamiLocation: "Локация:",
		whoamiLocationValue: "Ханой",
		skillsLanguages: "языки",
		skillsFrontend: "фронтенд",
		skillsBackend: "бэкенд",
		skillsDevops: "devops",
		skillsSystems: "системы",
		skillsTools: "инструменты",
		contactEmail: "почта",
		contactGithub: "github",
		contactLinkedin: "linkedin",
		sidebarCommands: "доступные команды",
		sidebarTips: "подсказки",
		tipTab: "— автодополнение",
		tipArrows: "— история",
		tipCtrlL: "— очистить",
		cmdDesc_whoami: "обо мне",
		cmdDesc_skills: "стек технологий",
		cmdDesc_contact: "связаться",
		cmdDesc_theme: "тема (light | dark | system)",
		cmdDesc_lang: "язык (en | ru | vn)",
		cmdDesc_clear: "очистить экран",
		themeUsage: "использование: theme [light | dark | system]",
		themeSet: "тема:",
		themeInvalid: "неверная тема:",
		langUsage: "использование: lang [en | ru | vn]",
		langSet: "язык:",
		langInvalid: "неверный язык:",
		commandNotFound: "команда не найдена:",
		sudoNiceTry: "хорошая попытка",
		exitNoEscape: "выхода нет",
		nvimBtw: "кстати, я пользуюсь neovim",
		lsFake: "projects/ skills/ README.md",
		pwdFake: "/home/user",
	},
	vn: {
		windowPortfolio: "~/portfolio",
		windowSystemInfo: "thông tin hệ thống",
		placeholderInput: "gõ lệnh...",
		hintTypeHelp: "gõ",
		hintHelpRest: "để xem lệnh",
		neofetchUser: "user",
		neofetchOs: "HĐH",
		neofetchHost: "Máy chủ",
		neofetchUptime: "Thời gian chạy",
		neofetchShell: "Shell",
		neofetchWm: "WM",
		neofetchEditor: "Trình sửa",
		neofetchTerminal: "Terminal",
		neofetchUptimeValue: "mãi mãi",
		whoamiRole: "Lập trình viên Full-Stack",
		whoamiBio:
			"Kỹ sư phần mềm chuyên về ứng dụng web có khả năng mở rộng và kiến trúc hệ thống. Yêu bản chất khai báo của NixOS. Đam mê terminal. Đóng góp mã nguồn mở.",
		whoamiLocation: "Địa điểm:",
		whoamiLocationValue: "Hà Nội",
		skillsLanguages: "ngôn ngữ",
		skillsFrontend: "frontend",
		skillsBackend: "backend",
		skillsDevops: "devops",
		skillsSystems: "hệ thống",
		skillsTools: "công cụ",
		contactEmail: "email",
		contactGithub: "github",
		contactLinkedin: "linkedin",
		sidebarCommands: "lệnh có sẵn",
		sidebarTips: "mẹo",
		tipTab: "để gợi ý",
		tipArrows: "cho lịch sử",
		tipCtrlL: "để xóa",
		cmdDesc_whoami: "giới thiệu",
		cmdDesc_skills: "công nghệ",
		cmdDesc_contact: "liên hệ",
		cmdDesc_theme: "đổi giao diện (light | dark | system)",
		cmdDesc_lang: "ngôn ngữ (en | ru | vn)",
		cmdDesc_clear: "xóa màn hình",
		themeUsage: "cách dùng: theme [light | dark | system]",
		themeSet: "đã đặt theme:",
		themeInvalid: "theme không hợp lệ:",
		langUsage: "cách dùng: lang [en | ru | vn]",
		langSet: "đã đặt ngôn ngữ:",
		langInvalid: "ngôn ngữ không hợp lệ:",
		commandNotFound: "không tìm thấy lệnh:",
		sudoNiceTry: "cố lên",
		exitNoEscape: "không thoát được đâu",
		nvimBtw: "nhân tiện mình dùng neovim",
		lsFake: "projects/ skills/ README.md",
		pwdFake: "/home/user",
	},
};

export function dateLocaleFor(locale: Locale): string {
	switch (locale) {
		case "ru":
			return "ru-RU";
		case "vn":
			return "vi-VN";
		default:
			return "en-US";
	}
}
