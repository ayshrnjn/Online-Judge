/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-yellow": "#f4c639",
				"primary-blue": "#1a92cf",
				"primary-red": "#b01e24",
				// Complementary Premium Colors
				"premium-gold": "#d4af37",
				"premium-silver": "#c0c0c0",
				"premium-bronze": "#cd7f32",
				"premium-platinum": "#e5e4e2",
				// Dark Theme Colors
				"dark-layer-2": "rgb(2,94,107)",
				"dark-layer-2h": "rgb(9 76 85);",
				"dark-layer-1": "rgb(26,26,26)",
				"dark-label-2": "rgba(239, 241, 246, 0.75)",
				"dark-divider-border-2": "rgb(61, 61, 61)",
				"dark-fill-2": "hsla(0,0%,100%,.14)",
				"dark-fill-3": "hsla(0,0%,100%,.1)",
				"dark-gray-6": "rgb(138, 138, 138)",
				"dark-gray-7": "rgb(179, 179, 179)",
				"gray-8": "rgb(38, 38, 38)",
				"dark-gray-8": "rgb(219, 219, 219)",
				"body-1-h": "m#164e63",
				"body-2-h": "#0e7490",
				// Brand Accent Colors
				"brand-orange": "rgb(255 161 22)",
				"brand-orange-s": "rgb(193, 122, 15)",
				"dark-yellow": "rgb(255 192 30)",
				"dark-pink": "rgb(255 55 95)",
				"olive": "rgb(0, 184, 163)",
				"dark-green-s": "rgb(44 187 93)",
				"dark-blue-s": "rgb(10 132 255)",
			},
		},
	},
	plugins: [],
};
