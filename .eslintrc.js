module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  plugins: [
    // '@typescript-eslint',
    "import"
  ],
  env: {
    browser: true,
    node: true
  },
  extends: [
    "airbnb-typescript-prettier"
  ],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
  },
  ecmaFeatures: {
    "jsx": true,
    "modules": true
  }
};
