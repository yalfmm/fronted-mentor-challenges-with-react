/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['"Montserrat"', 'sans-serif'],
        "fraunces": ['"Fraunces"', 'sans-serif']
      },
      colors: {
        "dark_cyan": "hsl(158, 36%, 37%)",
        "verydark_cyan": "hsl(158, 42%, 18%)",
        "cream": "hsl(30, 38%, 92%)",
        "verydark_blue": "hsl(212, 21%, 14%)",
        "darkgrayish_blue": "hsl(228, 12%, 48%)",
        "white": "hsl(0, 0%, 100%)"
      },
	  dropShadow: {
        '3xl': '4px 4px 4px hsl(158, 42%, 18%)',
      },
    },
  },
  plugins: [],
}

