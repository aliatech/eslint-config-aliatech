/* eslint-disable no-unused-vars, one-var, no-redeclare */

//=======================================================================
// semi-spacing
//=======================================================================

// 👎 Missing whitespace after semicolon.
var foo;var bar;

// 👎 Unexpected whitespace before semicolon.
var foo ; var bar;

//=======================================================================
// no-extra-semi
//=======================================================================

// 👎 Unnecesary semicolon & Missing whitespace after semicolon.
var x = 5;;

//=======================================================================
// semi
//=======================================================================

// 👎 Missing semicolon.
const method = function () {
}

//=======================================================================
// semi-style
//=======================================================================

// 👎 Expected this semicolon to be at the end of the previous line.
foo()
;[1, 2, 3].forEach(bar);
