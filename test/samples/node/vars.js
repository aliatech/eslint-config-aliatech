/* eslint-disable no-unused-vars, one-var, no-redeclare */

//=======================================================================
// no-var
//=======================================================================

// 👎 Unexpected var, use let or const instead.
var x = 'y';
var CONFIG = {};

// 👍 Good
let y = 'y';
y = 'z';
const CONFIG2 = {};

//=======================================================================
// prefer-const
//=======================================================================

// 👎 if it's never reassigned, use 'const' instead.
let a = 3;

// 👍 Good
let b = 1;
b++;
