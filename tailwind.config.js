/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#90f9d6",

          "secondary": "#c6d6ff",

          "accent": "#b994dd",

          "neutral": "#212835",

          "base-100": "#E6EAEF",

          "info": "#528AE5",

          "success": "#149443",

          "warning": "#995B05",

          "error": "#F62369",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

