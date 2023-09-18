import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14x",
      normal: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
    },
    colors: {
      grey: "#999999",
      lightGrey: "#F2F2F2",
      black: "#000000",
    },
  },
  plugins: [],
};
export default config;
