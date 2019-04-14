module.exports = {
    root: true,

    env: {
        node: true
    },

    rules: {
        'indent': ['error', 4],
        'vue/html-indent': ['error', 4],

        'no-console': 'off',
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    extends: [
      'plugin:vue/strongly-recommended',
      // '@vue/prettier'
    ]
};
