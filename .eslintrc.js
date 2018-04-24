// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-func-assign": 2,
    "no-invalid-regexp": 2,
    "no-multi-spaces": 1,
    "no-var": 2,
    "comma-spacing": 0,
    "comma-style": [2, "last"],
    "space-after-keywords": [0, "always"],
    "semi": [2, "always"],
    "semi-spacing": [0, {"before": false, "after": true}]
  }
}
