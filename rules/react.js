module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    "react",
    "jsx-a11y",
  ],
  rules: {
    "react/boolean-prop-naming": [2, { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" }],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-closing-tag-location": 2,
    "jsx-quotes": 2,
    "no-multi-spaces": 2,
    "react/jsx-tag-spacing": 2,
    "jsx-a11y/alt-text": 2,
    "react/jsx-key": 2,
    "react/no-array-index-key": 2,
    "react/jsx-wrap-multilines": 2,
    "react/self-closing-comp": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-uses-react": 2,
    "react/no-access-state-in-setstate": 2,
    "react/no-danger": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-max-depth": [2, { max: 4 }],
    "react/jsx-max-props-per-line": [2, { maximum: 3 }],
  }
}