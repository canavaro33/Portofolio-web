import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "matte-black": "#111111",
                "deep-black": "#0A0A0A",
                "card-dark": "#1A1A1A",
                "off-white": "#F8F9FA",
                "silver": "#C0C0C0",
                "silver-light": "#E8E8E8",
                gold: "#E6C687",
                "gold-dim": "#C9A55A",
                "gold-glow": "rgba(230, 198, 135, 0.25)",
                "gold-glow-soft": "rgba(230, 198, 135, 0.05)",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
                display: ["Inter", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "metallic-silver": "linear-gradient(135deg, #C0C0C0 0%, #FFFFFF 40%, #A8A8A8 60%, #FFFFFF 100%)",
                "gold-shimmer": "linear-gradient(90deg, #D4AF37 0%, #F5E577 50%, #D4AF37 100%)",
                "hero-radial": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    "0%": { opacity: "0", transform: "translateX(-32px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "slide-in-right": {
                    "0%": { opacity: "0", transform: "translateX(32px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "glow-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.2)" },
                    "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.15)" },
                },
                "spin-slow": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                "shimmer": {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                },
                "rotate-border": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.7s ease-out forwards",
                "slide-up": "slide-up 0.7s ease-out forwards",
                "slide-in-left": "slide-in-left 0.8s ease-out forwards",
                "slide-in-right": "slide-in-right 0.8s ease-out forwards",
                "glow-pulse": "glow-pulse 3s ease-in-out infinite",
                "spin-slow": "spin-slow 12s linear infinite",
                "shimmer": "shimmer 3s linear infinite",
                "float": "float 4s ease-in-out infinite",
                "rotate-border": "rotate-border 8s linear infinite",
            },
        },
    },
    plugins: [],
};

export default config;
