module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "eslint-plugin-import-helpers"],
  rules: {
    camelcase: "off",
    "consistent-return": "off",
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "no-console": "off",
    "no-empty-function": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-namespace": "off",
    "no-useless-constructor": "off",
    "no-restricted-syntax": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
