/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "prettier/prettier": ["error", { singleQuote: true, parser: "flow" }],
    "vue/setup-compiler-macros": true,
  },
};
