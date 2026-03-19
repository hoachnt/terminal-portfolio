"use client";

import * as React from "react";

export const ThemeRippleOverlay = React.memo(function ThemeRippleOverlay({
	baseColor,
}: {
	baseColor: string;
}) {
	const style = React.useMemo(() => {
		return { ["--tp-base"]: baseColor } as React.CSSProperties;
	}, [baseColor]);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-[9999]"
			aria-hidden="true"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				width="0"
				height="0"
				className="absolute"
			>
				<filter
					id="tp-liquid-displace"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.012 0.02"
						numOctaves="2"
						seed="2"
						result="noise"
					>
						<animate
							attributeName="baseFrequency"
							dur="1.4s"
							values="0.010 0.018;0.016 0.026;0.012 0.02"
							repeatCount="indefinite"
						/>
					</feTurbulence>
					<feDisplacementMap
						in="SourceGraphic"
						in2="noise"
						scale="14"
						xChannelSelector="R"
						yChannelSelector="G"
					/>
				</filter>
			</svg>
			<div
				className="tp-ripple-layer"
				style={style}
			/>
			<style jsx global>{`
				@keyframes tp-ripple-reveal {
					0% {
						clip-path: circle(0vmax at 50% 50%);
						transform: translateZ(0) scale(1.04);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					38% {
						clip-path: circle(62vmax at 49% 51%);
					}
					58% {
						clip-path: circle(108vmax at 51% 49%);
					}
					78% {
						clip-path: circle(156vmax at 50% 50%);
						transform: translateZ(0) scale(0.992);
					}
					100% {
						clip-path: circle(150vmax at 50% 50%);
						transform: translateZ(0) scale(1);
						opacity: 1;
					}
				}

				@keyframes tp-ripple-viscosity {
					0% {
						filter: url(#tp-liquid-displace) blur(0.45px);
					}
					65% {
						filter: url(#tp-liquid-displace) blur(0.3px);
					}
					100% {
						filter: url(#tp-liquid-displace) blur(0.2px);
					}
				}

				@keyframes tp-ripple-fade {
					0% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}

				.tp-ripple-layer {
					position: absolute;
					inset: 0;
					background:
						radial-gradient(
							1400px 900px at 50% 45%,
							rgba(255, 255, 255, 0.22) 0%,
							rgba(255, 255, 255, 0.0) 58%
						),
						radial-gradient(
							900px 700px at 55% 55%,
							rgba(255, 255, 255, 0.1) 0%,
							rgba(255, 255, 255, 0) 62%
						),
						linear-gradient(
							135deg,
							color-mix(in srgb, var(--tp-base) 92%, white 8%) 0%,
							var(--tp-base) 55%,
							color-mix(in srgb, var(--tp-base) 92%, black 8%) 100%
						);
					backdrop-filter: blur(18px) saturate(1.25) contrast(1.05);
					-webkit-backdrop-filter: blur(18px) saturate(1.25) contrast(1.05);
					box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);

					animation:
						tp-ripple-reveal 1180ms cubic-bezier(0.16, 1, 0.3, 1) both,
						tp-ripple-viscosity 1180ms cubic-bezier(0.16, 1, 0.3, 1) both,
						tp-ripple-fade 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
					animation-delay: 0ms, 0ms, 980ms;

					will-change: clip-path, opacity, transform;
				}

				@media (prefers-reduced-motion: reduce) {
					.tp-ripple-layer {
						animation: none !important;
						clip-path: none !important;
						filter: none !important;
						opacity: 1 !important;
					}
				}
			`}</style>
		</div>
	);
});

