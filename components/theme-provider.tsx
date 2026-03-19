"use client";

import * as React from "react";
import {
	ThemeProvider as NextThemesProvider,
	type ThemeProviderProps,
} from "next-themes";
import { useTheme } from "next-themes";

function ThemeTransitionController() {
	const { resolvedTheme } = useTheme();
	const hasMountedRef = React.useRef(false);

	React.useEffect(() => {
		if (!hasMountedRef.current) {
			hasMountedRef.current = true;
			return;
		}

		const root = document.documentElement;
		root.classList.add("theme-transition");

		const timeoutId = window.setTimeout(() => {
			root.classList.remove("theme-transition");
		}, 250);

		return () => window.clearTimeout(timeoutId);
	}, [resolvedTheme]);

	return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<ThemeTransitionController />
			{children}
		</NextThemesProvider>
	);
}
