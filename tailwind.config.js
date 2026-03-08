/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 这里的颜色值必须与 Stitch 原型图完全一致
        "primary": "#13c8ec",
        "background-light": "#f6f8f8",
        "background-dark": "#101f22",
      },
      fontFamily: {
        // 确保 Manrope 字体被正确识别
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}