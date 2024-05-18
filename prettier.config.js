module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-css-order",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: ["react", "react-(.*)$", "next", "^components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
