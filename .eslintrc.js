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
  // "off" or "0"：表示这个规则关闭，
  // "warn" or "1"：表示这个规则是一个警告处理
  // "error" or "2"：表示这个规则是一个错误处理
  rules: {
    "no-func-assign": 2,//禁止重复的函数声明
    "no-invalid-regexp": 2,//禁止无效的正则表达式
    "no-multi-spaces": 1,//不能用多余的空格
    "no-var": 2,//禁用var，用let和const代替
    "comma-spacing": 0,//逗号前后的空格
    "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    "semi": [2, "always"],//语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": true}]//分号前后空格
  }
}
