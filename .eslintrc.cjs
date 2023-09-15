module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    // 'react-refresh',
    '@typescript-eslint',
    'react-hooks',
    'unused-imports',
    'import-newlines'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      },
    ],
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
    'no-undef': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'linebreak-style': [2, 'unix'],
    'max-len': [2, {
      ignoreComments: true,
      code: 125,
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    semi: [2, 'always'],
    'import/no-unresolved': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true, minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: {
        multiline: true, minProperties: 2,
      },
      ExportDeclaration: {
        multiline: true, minProperties: 2,
      },
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 1,
    'no-debugger': 1,
    camelcase: 'off',
    // "import-newlines/enforce": "error",
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/order': ['error', {
      pathGroupsExcludedImportTypes: [],
      pathGroups: [{
        pattern: '@/**',
        group: 'internal',
      }],
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'max-len': 0,
    },
  }],
};
