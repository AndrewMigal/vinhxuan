/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Чистый черный и оттенки для карточек/разделителей
                background: "#000000",
                surface: "#111111", // Для блоков, которые чуть светлее фона
                // Акценты
                accent: "#ffffff",
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
