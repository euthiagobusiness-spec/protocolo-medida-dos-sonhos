import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#000000",
        ink: "#0b0b0d",
        copper: "#6d001a",
        copperSoft: "#d9123b",
        night: "#160007",
        mist: "#ffffff"
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        copper: "0 24px 80px rgba(109, 0, 26, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
