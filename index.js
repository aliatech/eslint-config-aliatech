/* eslint-disable no-magic-numbers */

'use strict';

module.exports = {
  'extends': 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  rules: {
    // Enforce a maximum line length.
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', {
      code: 100, // Enforces a maximum line length
      tabWidth: 2, // Specifies the character width for tab characters
      ignoreComments: true, // Ignores all trailing comments and comments on their own line
      ignoreUrls: true, // Ignores lines that contain a URL
      ignorePattern: '^\\s*var\\s.+=\\s*(require\\s*\\()|(/)', // Ignores lines matching a regular expression
      ignoreTemplateLiterals: true, // Ignores lines that contain a template literal
    }],
    // Enforce consistent indentation.
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      FunctionDeclaration: {parameters: 'first'},
      FunctionExpression: {parameters: 'first'},
      CallExpression: {arguments: 'first'},
      ArrayExpression: 'first',
      ObjectExpression: 'first',
      ImportDeclaration: 'first',
      flatTernaryExpressions: false,
    }],
    // Require or disallow semicolons instead of ASI.
    // https://eslint.org/docs/rules/sem
    semi: ['error', 'always'],
    // Enforce spacing before and after semicolons.
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', {
      before: false, // Space is disallowed before semicolons
      after: true, // Space is enforced after semicolons
    }],
    // Enforce location of semicolons.
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],
    // Require constructor names to begin with a capital letter.
    // https://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      newIsCap: true, // Requires all new operators to be called with uppercase-started functions
    }],

    //=======================================================================
    // Variables
    //=======================================================================

    // Enforce variables to be declared either together or separately in functions.
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', {
      initialized: 'never',
      uninitialized: 'always',
    }],
    // Require let or const instead of var.
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // Suggest using const.
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error',

    //=======================================================================
    // Functions
    //=======================================================================

    // Require a space before function parenthesis.
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', 'always'],
    // Require space before/after arrow function’s arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', {before: true, after: true}],
    // Require parens in arrow function arguments.
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],
    // Enforce spacing around the * in generator functions.
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', {before: true, after: true}],
    // Require using arrow functions for callbacks.
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true, // Allowing use of named functions without restriction.
      // Allows function expressions containing this to be used as callbacks,
      // as long as the function in question has not been explicitly bound
      allowUnboundThis: true,
    }],

    //=======================================================================
    // Padding & Spacing
    //=======================================================================

    // Requires a whitespace (space or tab) beginning a comment.
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '=', '+', '*', '/'],
    }],
    // Require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', {
      blocks: 'never', // Disallow padding within block statements
      classes: 'always', // Require padding within classes
      switches: 'never', // Disallow padding within switch statements
    }],
    // Require an empty line between class members.
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],
    // Require or disallow padding lines between statements.
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': ['error', {
      blankLine: 'always', prev: '*', next: 'class',
    }, {
      blankLine: 'always', prev: 'class', next: '*',
    }, {
      blankLine: 'always', prev: 'directive', next: '*',
    }, {
      blankLine: 'never', prev: 'directive', next: 'directive',
    }],
    // Disallow multiple spaces.
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',
    // Enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', {
      beforeColon: false, // Disallows spaces between the key and the colon in object literals.
      afterColon: true, // Requires at least one space between the colon and the value in object literals.
    }],
    // Require spacing around infix operators.
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',
    // Disallow spaces inside of parentheses.
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],
    // Enforce consistent spacing before and after keywords.
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {before: true, after: true}],
    // Disallow spaces inside of brackets.
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],
    // Disallow spacing inside braces.
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'never'],
    // Require or disallow spaces before/after unary operators.
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true, // Applies to unary word operators such as: new, delete, typeof, void, yield.
      nonwords: false, // Applies to unary operators such as: -, +, --, ++, !, !!
    }],
    // Disallow spaces inside of computed properties.
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],
    // Enforces spacing around commas.
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', {before: false, after: true}],
    // Disallow trailing whitespace at the end of lines.
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ['error', {
      skipBlankLines: true, // Allows trailing whitespace on empty lines.
      ignoreComments: true, // Allows trailing whitespace in comment blocks.
    }],

    //=======================================================================
    // Lines
    //=======================================================================

    // Enforce consistent line breaks inside braces.
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      multiline: true, // Requires line breaks if there are line breaks inside properties or between properties.
      minProperties: 3, // Requires line breaks if the number of properties is at least the given integer.
      consistent: true, // Requires that either both curly braces, or neither, directly enclose newlines.
    }],
    // Require or disallow newline at the end of files.
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],
    // Disallow multiple empty line.
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', {
      max: 1, // Enforces a maximum number of consecutive empty lines.
      maxBOF: 1, // Enforces a maximum number of consecutive empty lines at the beginning of files.
      maxEOF: 1, // Enforces a maximum number of consecutive empty lines at the end of files.
    }],

    //=======================================================================
    // Braces
    //=======================================================================

    // Require Brace Style.
    // https://eslint.org/docs/rules/brace-style
    'brace-style': 'error', // Enforces one true brace style.
    // Require Following Curly Brace Conventions.
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line', 'consistent'],

    //=======================================================================
    // Commas
    //=======================================================================

    // Require or disallow trailing commas.
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],
    // Comma style.
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    //=======================================================================
    // General readability
    //=======================================================================

    // Require Dot Notation.
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', {allowKeywords: false}],
    // Suggest using template literals instead of string concatenation.
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',
    // Enforce the consistent use single quotes.
    // https://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', {
      // Allows strings to use double-quotes so long as the string contains
      // a quote that would have to be escaped otherwise
      avoidEscape: true,
      allowTemplateLiterals: true, // Allows strings to use backticks
    }],
    // Disallow quotes around object literal property names if unnecessary.
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed', {
      keywords: true, // Requires quotes around language keywords used as object property names.
      numbers: true, // Requires quotes around numbers used as object property names.
    }],
    // Require Object Literal Shorthand Syntax.
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always'],
    // Disallow Yoda Conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
    // Require === and !== except for comparing two literal values, evaluating the value of typeof or comparing against null.
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'smart'],

    //=======================================================================
    // Design
    //=======================================================================

    // Disallow Magic Numbers.
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['error', {
      ignore: [-1, 0, 1], // Array of numbers to ignore.
      ignoreArrayIndexes: true, // Numbers used as array indexes are considered okay.
    }],
    // Restrict what can be thrown as an exception.
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    //=======================================================================
    // Efficiency
    //=======================================================================

    // Disallow unnecessary concatenation of strings.
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    //=======================================================================
    // Vulnerabilities
    //=======================================================================

    // Disallow use of the Buffer() constructor.
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',
    // Disallow string concatenation when using __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',
    // Disallow Self Compare.
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',
    // Disallow Unused Expressions.
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowTernary: true, // Enable to use ternary operators in expressions.
    }],
    // Require using Error objects as Promise rejection reasons.
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',
    // Require strict mode directives.
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'global'],
  },
};
