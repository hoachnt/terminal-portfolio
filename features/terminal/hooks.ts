import * as React from "react";

function getMatchMedia(query: string): MediaQueryList | null {
	if (typeof window === "undefined") return null;
	return typeof window.matchMedia === "function" ? window.matchMedia(query) : null;
}

export function usePrefersReducedMotion(): boolean {
	const [reduced, setReduced] = React.useState(false);

	React.useEffect(() => {
		const mql = getMatchMedia("(prefers-reduced-motion: reduce)");
		if (!mql) return;

		const onChange = () => setReduced(mql.matches);
		onChange();

		if (typeof mql.addEventListener === "function") {
			mql.addEventListener("change", onChange);
			return () => mql.removeEventListener("change", onChange);
		}

		// Safari < 14
		(mql as unknown as { addListener: (cb: () => void) => void }).addListener(
			onChange,
		);
		return () =>
			(
				mql as unknown as { removeListener: (cb: () => void) => void }
			).removeListener(onChange);
	}, []);

	return reduced;
}

export function usePrefersDarkColorScheme(): boolean {
	const [prefersDark, setPrefersDark] = React.useState(false);

	React.useEffect(() => {
		const mql = getMatchMedia("(prefers-color-scheme: dark)");
		if (!mql) return;

		const onChange = () => setPrefersDark(mql.matches);
		onChange();

		if (typeof mql.addEventListener === "function") {
			mql.addEventListener("change", onChange);
			return () => mql.removeEventListener("change", onChange);
		}

		(mql as unknown as { addListener: (cb: () => void) => void }).addListener(
			onChange,
		);
		return () =>
			(
				mql as unknown as { removeListener: (cb: () => void) => void }
			).removeListener(onChange);
	}, []);

	return prefersDark;
}

