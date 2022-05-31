const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  extends: ['last', 'prettier', 'prettier/react', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
  },
  globals: {
    describe: true,
    it: true,
    module: true,
    exports: true,
    require: true
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ]
  }
};
