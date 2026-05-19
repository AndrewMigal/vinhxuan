/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Светлые оттенки для Minimalist Japan темы
                background: "#FAFAFA",
                surface: "#F5F5F5",
                accent: "#0A0A0A",
                paper: "#FFFFFF",
            },
            fontFamily: {
                // Если захочешь подключить строгий шрифт через Google Fonts
                sans: ['Inter', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-.04em',
                widest: '.25em',
            }
        },
    },
    plugins: [],
}
