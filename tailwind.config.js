/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#3F72AF",
        "text-secondry": "#DBE2EF",
        "background-primary": "#112D4E",
        "background-secondry": "#F9F7F7",
        "current": "#DBE2EF"
      },
    },
  },
  plugins: [],
}

