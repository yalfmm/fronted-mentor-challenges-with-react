/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "haken": ['"Hanken Grotesk"', 'sans-serif']
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%),",
        "cobalt-blue": "hsl(234, 85%, 45%)",

        "ntl-paleblue": "hsl(221, 100%, 96%)",
        "ntl-lvndr": "hsl(241, 100%, 89%)",
        "ntl-grayblue": "hsl(224, 30%, 27%)",

        "grdnt-slate": "hsl(252, 100%, 67%)",
        "grdnt-royal": "hsl(241, 81%, 54%)",
        "grdnt-violet": "hsla(256, 72%, 46%, 1)",
        "grdnt-persian": "hsla(241, 72%, 46%, 0)"
      },
    },
  },
  plugins: [],
}
