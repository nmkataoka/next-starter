// @ts-check

import eslint from "@eslint/js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
  },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "eslint-plugin-import/no-unresolved": 0, // Incompatible with upcoming explicit file extension requirement for TS files using new module resolution
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": 1,
      "@typescript-eslint/no-unused-vars": [
        2,
        {
          vars: "all",
          args: "all",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-var-requires": 0, // If you're using this, it's probably because you need it.
    },
  },
);
