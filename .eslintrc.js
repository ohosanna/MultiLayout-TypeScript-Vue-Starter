module.exports = {
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // 设置默认eslint规则
    "comma-dangle": [2,
      {
        arrays: "always-multiline",
        objects: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'no-console': 0,
    'semi': [1, 'never'],
    'no-extra-semi': 2,
    'space-before-function-paren': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    'camelcase': 0,
    'no-new': 0,
    // "import/no-unresolved": 0,
    // 设置typescript-eslint规则
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}