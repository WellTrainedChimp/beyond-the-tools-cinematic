/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2E4036",
                accent: "#CC5833",
                background: "#F2F0E9",
                dark: "#1A1A1A",
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                outfit: ['"Outfit"', 'sans-serif'],
                drama: ['"Cormorant Garamond"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
            animation: {
                flip: "flip 6s infinite steps(2, end)",
                rotate: "rotate 3s linear infinite both",
            },
            keyframes: {
                flip: {
                    to: { transform: "rotate(360deg)" },
                },
                rotate: {
                    to: { transform: "rotate(90deg)" },
                },
            }
        },
    },
    plugins: [],
}
