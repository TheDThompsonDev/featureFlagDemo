import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./src/pages/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/app/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {},
	},
	plugins: [],
} satisfies Config

export default config