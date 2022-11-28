module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    chrome: true,
    window: true,
    document: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json"
      }
    }
  },
  plugins: [ "@typescript-eslint", "simple-import-sort", "import" ],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [
    // override "simple-import-sort" config
    {
      files: [ "*.js", "*.jsx", "*.ts", "*.tsx" ],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              [ "^react", "^next", "^@?\\w" ],
              // Side effect imports.
              // ["^\\u0000"],
              // Internal packages.
              // Parent imports. Put `..` last.
              // Other relative imports. Put same-folder imports and `.` last.
              [ "^(components|app|assets|entries|styles)(.*|$)" ],
              // Style imports.
              [ "^($)(.*|$)", "^.+\\.?(css)$" ]
            ]
          }
        ]
      }
    }
  ],
  rules: {
    "consistent-return": "off",
    "no-param-reassign": "off",
    quotes: [ "error", "double" ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true
      }
    ],
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/no-shadow": "off",
    //imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    //react
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "import/order": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
  }
};
