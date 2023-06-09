module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:solid/typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "esnext",
      "target": "es2021",
      "sourceType": "module"
    },
    "plugins": ["solid"],
    "rules": {},
    "ignorePatterns": ["*.cjs", "*.css", "*.config.js"],
    "overrides": [
      {
        "files": ["index.css"],
        "rules": {
          "tailwind-classname": "off"
        }
      }
    ]
  };