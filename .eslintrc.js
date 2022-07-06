module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-native", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": 2,
    "react-native/no-unused-styles": 2,
    "no-duplicate-imports": 2,
    "@typescript-eslint/no-explicit-any": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
