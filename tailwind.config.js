/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#292828",
				secondary: "#242121",
				color1: "rgba(113, 197, 244, 0.38)",
				color2: "rgba(171, 113, 244, 0.38)",
				color3: "rgba(244, 113, 168, 0.38)",
				search: "#373737",
			},
			boxShadow: {
				primary: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
