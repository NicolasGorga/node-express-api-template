module.exports = {
    extends: [
        'plugin:prettier/recommended',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        ecmaVersion: 14,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        'no-var': 'error',
        'prefer-const': ['error'],
        camelcase: ['error'],
        'capitalized-comments': ['error'],
    },
};
