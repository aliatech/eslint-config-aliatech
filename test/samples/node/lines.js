/* eslint-disable no-unused-vars, no-redeclare, no-undef, padded-blocks */

//=======================================================================
// object-curly-newline
//=======================================================================

// 👍 Good
var a = {};
var b = {foo: 1};
var c = {foo: 1, bar: 2};
var a = {
  foo: 1,
  bar: 2,
};
var {f} = obj;
var {a, b} = obj;

// 👎 Expected a line break after the opening brace and the before the closing brace.
var y = {foo: 1, bar: 2, quax: 1};
let d = {foo: 1,
         bar: 2};
var {g, h, i} = obj;
var {a,
     j} = obj;

//=======================================================================
// no-multiple-empty-lines
//=======================================================================

// 👎 More than 1 blank line not allowed.
var foo = 5;


var bar = 3;

// 👎 Too many blank lines at the end of the file. Max of 1 allowed.


