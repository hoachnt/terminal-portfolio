"use client";

import * as React from "react";
import type { Locale } from "./messages";
import { LOCALES, messages, type MessageId } from "./messages";

const STORAGE_KEY = "terminal-locale";

type TerminalLocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: (id: MessageId) => string;
};

const TerminalLocaleContext = React.createContext<
	TerminalLocaleContextValue | undefined
>(undefined);

function readStoredLocale(): Locale | null {
	if (typeof window === "undefined") return null;
	const raw = window.localStorage.getItem(STORAGE_KEY);
	if (raw === "en" || raw === "ru" || raw === "vn") return raw;
	return null;
}

export function TerminalLocaleProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [locale, setLocaleState] = React.useState<Locale>("en");

	React.useEffect(() => {
		const stored = readStoredLocale();
		if (stored) setLocaleState(stored);
	}, []);

	const setLocale = React.useCallback((next: Locale) => {
		setLocaleState(next);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(STORAGE_KEY, next);
		}
	}, []);

	const t = React.useCallback(
		(id: MessageId) => messages[locale][id],
		[locale],
	);

	const value = React.useMemo(
		() => ({ locale, setLocale, t }),
		[locale, setLocale, t],
	);

	return (
		<TerminalLocaleContext.Provider value={value}>
			{children}
		</TerminalLocaleContext.Provider>
	);
}

export function useTerminalLocale(): TerminalLocaleContextValue {
	const ctx = React.useContext(TerminalLocaleContext);
	if (!ctx) {
		throw new Error(
			"useTerminalLocale must be used within TerminalLocaleProvider",
		);
	}
	return ctx;
}

export function isLocale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}
