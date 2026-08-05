/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#030912",
        panel: "#07111d",
        panel2: "#0a1624",
        blue: "#1687ff",
        cyan: "#00b8ff",
        green: "#00e676",
        lime: "#39f06f"
      },
      boxShadow: {
        glow: "0 0 35px rgba(0, 230, 118, .12)",
        blueglow: "0 0 35px rgba(22, 135, 255, .18)"
      }
    }
  },
  plugins: []
};
