// badprog.com
//
import eslintRecommended from "@eslint/js"; // Import recommended config

export default [
  {
    files: ["p_*/{src,tests}/**/*.js"],
    languageOptions: {
      sourceType: "module", // For ES Modules
      globals: {
        node: true,
        es2021: true,
        jest: true,
      },
    },
    ...eslintRecommended.configs.recommended, // Shutdown the recommended config
    rules: {
      "no-console": "warn", // Custom rules
    },
  },
];
