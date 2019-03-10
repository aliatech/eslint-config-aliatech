/* eslint-disable no-unused-vars,no-redeclare, no-undef, no-magic-numbers, no-self-compare,
no-constant-condition, one-var, no-unreachable, no-var, no-empty, no-unused-expressions */

//=======================================================================
// dot-notation
//=======================================================================

// 👎 Is better written in dot notation.
var x = foo['bar'];
var x = foo['catch']; // Property name is a reserved word, but it's allowed

// 👍 Good
var x = foo.bar;
var x = foo['foo-bar'];
var x = foo[bar]; // Property name is a variable, square-bracket notation required
var foo = {'class': 'CS 101'};
var x = foo.catch; // Property name is a reserved word, square-bracket notation required

//=======================================================================
// prefer-template
//=======================================================================

// 👎 Is better written in dot notation.
var str = 'Hello, ' + name + '!';
var str = 'Time: ' + (12 * 60 * 60 * 1000);

// 👍 Good
var str = `Time: ${12 * 60 * 60 * 1000}`;

//=======================================================================
// quotes
//=======================================================================

// 👎 Strings must use singlequote.
var double = "double";

// 👍 Good
var single = 'single';
var single = `single`; // Allowed template literals
var unescaped = "a string containing 'single' quotes"; // Allowed in order to scape single quotes

//=======================================================================
// object-shorthand
//=======================================================================

// 👎 Expected property shorthand.
var foo = {
  a: a, // Key and variable names match, shorthand is required
  b: 'bar',
  'bar-baz' () {},
  z,
  * x () {},
  [y] () {},
  bar: (y) => y, // Arrow functions will not use shorthand syntax
};

//=======================================================================
// yoda
//=======================================================================

// 👎 Expected literal to be on the right side.
if ('red' === color) {
}
if (true === flag) {
}
if (5 > count) {
}
if (-1 < str.indexOf(substr)) {
}
if (0 <= x && x < 1) {
}

//=======================================================================
// quote-props
//=======================================================================

// 👎 Unnecessarily quoted property found.
var object = {
  'a': 0,
  0: 0,
  true: 0,
  null: 0,
};

// 👍 Good
var object1 = {
  'a-b': 0,
  '0x0': 0,
  '1e2': 0,
  'true': 2,
  'class': 0,
  foo: 'bar',
  baz: 42,
  '0': 0,
  'qux-lorem': true,
  quax,
  bar () {},
};
