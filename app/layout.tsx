import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const firaCode = Fira_Code({
	weight: ["400", "500"],
	subsets: ["latin", "cyrillic"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Hoachnt Terminal Portfolio",
	description: "Interactive terminal-style portfolio",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${firaCode.variable} font-mono antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
