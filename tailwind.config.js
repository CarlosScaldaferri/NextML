/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      blue: {
        link: "#0000FF",
        weak: "#6495ED",
        strong: "#000033",
        bgWeak: "#B0C4DE",
      },
    },
    fontFamily: {
      proximaNova: ["Proxima Nova", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },
  },
};
export const plugins = [];
