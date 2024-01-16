/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1f1f1f",
				secondary: "#1a1a1a",
				tertiary: "#282424",
				"red-primary": "#fa4654",
				"white-primary": "#E0E0E0",
				"purple-primary": "#b392f0",
			},
			textColor: {
				"red-primary": "#fa4654",
				"editor-primary": "#E0E0E0",
				"editor-functions": "#b392f0",
			},
			fontFamily: {
				"jbrains-mono": ["Jetbrains Mono", "Arial"],
				inter: ["Inter", "ui-serif"],
			},
			borderWidth: {
				1: "1px",
			},
			borderRadius: {
				xsm: "4px",
			},
			fontSize: {
				xss: "0.625rem",
			},
		},
	},
	plugins: [import("tailwind-variants")],
};
