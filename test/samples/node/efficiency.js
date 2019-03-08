/* eslint-disable no-undef, no-magic-numbers, no-unused-vars, no-var, no-redeclare */

//=======================================================================
// no-useless-concat
//=======================================================================

// 👎 Unexpected string concatenation of literals.
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;

// 👍 Good
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
var c = 'foo' + // multi-line string concatenation is allowed
        'bar';
