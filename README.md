# eslint-config-aliatech

[![Build Status](https://travis-ci.org/aliatech/eslint-config-aliatech.svg?branch=master)](https://travis-ci.org/aliatech/eslint-config-aliatech)
[![npm version](https://img.shields.io/npm/v/@aliatech/eslint-config-aliatech.svg?color=blue)](https://www.npmjs.com/package/@aliatech/eslint-config-aliatech)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for
[ALIA Technologies](http://alialabs.com "Go to ALIA Technologies' website") NodeJS code style (ES2015+ version)

## How to install

Install the package through NPM

```bash
npm i -D eslint @aliatech/eslint-config-aliatech
```

Install the package through Yarn

```bash
yarn add --prod eslint @aliatech/eslint-config-aliatech
```

## Usage

Once the `eslint-config-aliatech` package is installed, you can use it by specifying `aliatech/env-node`
in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section
of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "aliatech/env-node",
  "rules": {
    // Additional, per-project rules...
  }
}
```

Determine which environment you wish to target. This package includes the following ones:

| Target Environment   | Description                                   |
| :------------------- | :-------------------------------------------- |
| `aliatech`           | General JavaScript (ES6, ES2016, and ES2017)  |
| `aliatech/env-node`  | Node.js support (extends `aliatech`)          |
| `aliatech/env-mocha` | Mocha support (extends `aliatech`)            |

### Extensions

This package also includes rules for the [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc).
If you want to lint jsdoc comments:

* Install the plugin [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
* Add `aliatech/extend` to your `extends` key.

```bash
npm i -D eslint-plugin-jsdoc
```

```js
{
  "extends": ["aliatech/env-node", "aliatech/extend-jsdoc"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

It's recommended that your project have a `.eslintignore` file in the root of your project. Add all
directories and file patterns you wish to ignore. At the the very least, you should ignore the
`node_modules` directory:

```
# .eslintignore

node_modules
```

## NPM Scripts

Add a `lint` and `test` scripts to the `package.json`.   

```json
{
  "scripts": {
    "lint": "eslint --config aliatech/env-node src",
    "test": "eslint --config aliatech/env-mocha test && mocha"
  }
}
```

Then run:

```bash
npm run lint
```

# Testing

Install develop dependences

```bash
npm i -D # If you use NPM
yarn install # If you use Yarn
```

Execute tests

```bash
npm test
```

# Credits

Developed by
[Juan Costa](https://github.com/Akeri "Github's profile")
for [ALIA Technologies](https://github.com/aliatech "Github's profile")


[<img src="http://alialabs.com/images/logos/logo-full-big.png" alt="ALIA Technologies" height=100/>](http://alialabs.com "Go to ALIA Technologies' website")
