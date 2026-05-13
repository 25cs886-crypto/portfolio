/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
					950: "#172554",
				},
				secondary: {
					50: "#faf5ff",
					100: "#f3e8ff",
					200: "#e9d5ff",
					300: "#d8b4fe",
					400: "#c084fc",
					500: "#a855f7",
					600: "#9333ea",
					700: "#7e22ce",
					800: "#6b21a8",
					900: "#581c87",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["Fira Code", "monospace"],
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
			},
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				"3xl": "1.5rem",
			},
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
				lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
				xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
				"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
				none: "none",
			},
			animation: {
				fadeIn: "fadeIn 0.6s ease-in-out",
				slideInUp: "slideInUp 0.6s ease-out",
				slideInDown: "slideInDown 0.6s ease-out",
				slideInLeft: "slideInLeft 0.6s ease-out",
				slideInRight: "slideInRight 0.6s ease-out",
				scaleIn: "scaleIn 0.4s ease-out",
				float: "float 3s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				shimmer: "shimmer 2s infinite",
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				slideInUp: {
					from: { opacity: "0", transform: "translateY(30px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideInDown: {
					from: { opacity: "0", transform: "translateY(-30px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideInLeft: {
					from: { opacity: "0", transform: "translateX(-30px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideInRight: {
					from: { opacity: "0", transform: "translateX(30px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				scaleIn: {
					from: { opacity: "0", transform: "scale(0.95)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				glow: {
					"0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
					"50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-1000px 0" },
					"100%": { backgroundPosition: "1000px 0" },
				},
			},
			backdropBlur: {
				xs: "2px",
			},
			opacity: {
				3: "0.03",
				7: "0.07",
			},
		},
	},
	plugins: [],
};
