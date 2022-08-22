module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './common.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        args: 'none',
        vars: 'all',
      },
    ],
    'no-useless-constructor': [0],
    '@typescript-eslint/no-extra-semi': [0],
    '@typescript-eslint/no-non-null-assertion': [0],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['field', 'constructor', 'public-method', 'private-method'],
      },
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty', 'accessor'],
        format: null,
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],

    // Requires type checking
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    'no-return-await': 0,
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'require-await': 0,
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.*spec.ts', '*.*test.ts'],

      rules: {
        '@typescript-eslint/require-await': 0,
      },
    },
  ],
};
