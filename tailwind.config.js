// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "app-black": "#141718",
        "app-gray": "#6C7275",
        "app-light-gray": "#E8ECEF",
        "app-slate-gray": "#343839",
        "app-green": "#38CB89",
        "app-blue": "#377DFF",
        "grayish-brown": "#605F5F",
        "taup-gray": "#807E7E",
        "muted-gray": "#B1B5C3",
        primary: {
          DEFAULT: "#F3F5F7",
        },
      },
      screens: {
        "2xl": "1440px",
      },
      boxShadow: {
        "wishlist-icon": "0px 8px 16px -8px rgba(15, 15, 15, 0.12)",
        "order-complete": "0px 32px 48px -48px rgba(18, 18, 18, 0.10)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
