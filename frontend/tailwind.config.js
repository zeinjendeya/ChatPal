import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    colors: {
      primary: {
        50: "#fff7fd",
        100: "#fde9f8",
        200: "#fbd8f4",
        300: "#f3b7e7",
        400: "#e2bbd7",
        500: "#a5829c",
        600: "#73556d",
        700: "#5a3e54",
        800: "#361d32",
        900: "#1f081c",
      },
      secondary: {
        50: "#fff5f4",
        100: "#ffdad6",
        200: "#ffb4ac",
        300: "#ff8a81",
        400: "#ff6058",
        500: "#f55951",
        600: "#e04841",
        700: "#b32927",
        800: "#900b13",
        900: "#650007",
      },
      tertiary: {
        50: "#fff6fd",
        100: "#fbd8f4",
        200: "#f0c9ea",
        300: "#ddbdd8",
        400: "#c6a6c1",
        500: "#a1849d",
        600: "#7b6277",
        700: "#573f55",
        800: "#341e33",
        900: "#1d091d",
      },
      neutral: {
        50: "#ffffff",
        100: "#fff8f6",
        200: "#fbf2f0",
        300: "#f5ecea",
        400: "#efe6e4",
        500: "#e9e1df",
        600: "#d0c3ca",
        700: "#7f747a",
        800: "#4d444a",
        900: "#1e1b1a",
      },
      error: {
        50: "#fff5f5",
        100: "#ffdad6",
        200: "#ffb4ab",
        300: "#ff8a80",
        400: "#ff5449",
        500: "#f23d33",
        600: "#dc2a22",
        700: "#ba1a1a",
        800: "#93000a",
        900: "#690005",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    fontSize: {
      "headline-lg": [
        "32px",
        { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" },
      ],
      "headline-lg-mobile": [
        "24px",
        { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" },
      ],
      "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
      "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
      "label-md": [
        "12px",
        { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" },
      ],
    },
    borderRadius: {
      sm: "0.25rem",
      DEFAULT: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      full: "9999px",
    },
    boxShadow: {
      ambient: "0px 4px 20px rgba(54, 29, 50, 0.04)",
      elevated: "0px 12px 32px rgba(54, 29, 50, 0.08)",
    },
    backdropBlur: {
      glass: "20px",
    },
    backgroundImage: {
      "coral-gradient": "linear-gradient(180deg, #73556d 50%, #1f081c 100%)",
    },
    },
  },
  plugins: [daisyui],
};
