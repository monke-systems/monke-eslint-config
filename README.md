# @monke/eslint-config package

## Install

```bash
npm i -D @monkee/eslint-config
```

## Usage in typescript projects

.eslintrc.yml

```yml
extends:
  - '@monkee/eslint-config/typescript'
parserOptions:
  project: ./tsconfig.json # or specify your ts config path
```

## Usage in javascript projects

.eslintrc.yml

```yml
extends:
  - '@monkee/eslint-config/pure-js'
```

## Package update flow

Package publishing only available via CI jobs.

You must use '-beta' postfix for testing purposes. Otherwise CI job being failed. Bump version via npm

```bash
npm version prerelease --preid beta
```

Before merge changes into master branch you should remove 'beta' postfix

```bash
npm version major | minor | patch
```

Learn more <https://docs.npmjs.com/cli/v8/commands/npm-version>
