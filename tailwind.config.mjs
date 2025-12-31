/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
          mono: ["Consolas", "Monaco", "Courier New", "monospace"],
        },
      },
    },
    plugins: [],
  };