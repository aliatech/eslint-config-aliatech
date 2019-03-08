/* eslint-disable new-cap, no-undef, no-redeclare, no-unused-vars, no-magic-numbers */

//=======================================================================
// no-buffer-constructor
//=======================================================================

// 👎 new Buffer() is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.
new Buffer(5);
new Buffer([1, 2, 3]);
Buffer(5);
Buffer([1, 2, 3]);
new Buffer(res.body.amount);
new Buffer(res.body.values);

//=======================================================================
// no-path-concat
//=======================================================================

// 👎 Use path.join() or path.resolve() instead of + to create paths.
var fullPath = __dirname + '/foo.js';
var fullPath = __filename + '/foo.js';

//=======================================================================
// no-self-compare
//=======================================================================

// 👎 Compare to itself is potentially pointless.
let x = 10;
if (x === x) {
  x = 2;
}

//=======================================================================
// no-unused-expressions
//=======================================================================

// 👎 Expected an assignment or function call and instead saw and expression.
0;
if (0) 0;
{0};
f(0), {};
a && b();
a, b();
c = a, b;
(function anIncompleteIIFE () {});
injectGlobal`body{ color: red; }`;
a || b
a ? b : 0
a ? b : c();

// 👍 Ternary operators are allowed in expressions.
a ? b() : c();
a ? (b = c) : d();

//=======================================================================
// prefer-promise-reject-errors
//=======================================================================

// 👎 Expected the Promise rejection reason to be an Error.
Promise.reject('something bad happened');
Promise.reject(5);
Promise.reject();
new Promise(function (resolve, reject) {
  reject('something bad happened');
});
new Promise(function (resolve, reject) {
  reject();
});

//=======================================================================
// eqeqeq
//=======================================================================

// 👎 Expected === instead of == and expected !== instead of !=.
/* eslint-disable no-unused-expressions */
a == b; // comparing two variables requires ===
foo == true; // only one side is a literal
bananas != 1;
value == undefined; // comparing to undefined requires ===

// 👍 Good
foo === true;
foo !== false;
typeof foo == 'undefined'; // typeof does not require ===
'hello' != 'world'; // literals values comparison does not require !==
0 == 1;
true == false;
foo == null;
