/* eslint-disable no-redeclare, no-undef, no-unused-vars, no-unreachable */

//=======================================================================
// no-magic-numbers
//=======================================================================

// 👎 No magic numbers.
var dutyFreePrice = 100;
var finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);

// 👍 Good
const TAX = 0.25;
var dutyFreePrice = 100;
var finalPrice = dutyFreePrice + (dutyFreePrice * TAX);

var data = ['foo', 'bar', 'baz'];
var dataLast = data[2]; // Array indexes will not considered magic numbers.

//=======================================================================
// no-throw-literal
//=======================================================================

// 👎 Expected an object to be thrown.
throw 'error';
throw undefined;
throw null;
var err = new Error();
throw 'an ' + err; // err is recast to a string literal
var err = new Error();
throw `${err}`;
