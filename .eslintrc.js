module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/react-in-jsx-scope": "off"
  }
}