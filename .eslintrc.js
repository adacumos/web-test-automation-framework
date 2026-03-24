module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            node: {
                project: './tsconfig.json',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:cypress/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'cypress'],
    rules: {
        'no-console': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'object-curly-spacing': ['error', 'always'],
        'import/no-unresolved': ['error', { commonjs: true, amd: true }], // disallow importing of unresolved modules
        'no-var': 'error', // disallow the use of var, use let or const instead
        'prefer-const': 'error', // require const if a variable is never reassigned
        'no-unused-vars': 'error', // disallow unused variables
        'no-restricted-globals': ['error', 'event', 'fdescribe'], // disallows the use of certain global variables
        'cypress/no-assigning-return-values': 'error', // prevents assigning the return value of a Cypress command to a variable
        'cypress/assertion-before-screenshot': 'error', // enforces taking a screenshot before making an assertion
        'cypress/no-force': 'warn', // prevents using the force option in Cypress commands
        'cypress/no-unnecessary-waiting': 'error', // prevents using cy.wait() unnecessarily
        'cypress/unsafe-to-chain-command': 'warn', // prevents chaining further commands that rely on the subject after the initial command
    },
};
