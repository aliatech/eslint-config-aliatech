/* eslint-disable no-unused-vars, no-redeclare, no-undef, padded-blocks */

//=======================================================================
// space-before-function-paren
//=======================================================================

// 👎 Missing space before function parenthesis.
function foo() {
}

var bar = function() {
};

var bar = function foo() {
};

class Foo {
  constructor() {
  }
}

var foo = {
  bar() {
  },
};

var foo = async() => 1;

//=======================================================================
// arrow-spacing
//=======================================================================

// 👎 Missing space before =>.
foo(()=> {});
const a = () =>{};
(a)=> {};
(a) =>{};
(a) =>a;
(a)=> a;

//=======================================================================
// generator-star-spacing
//=======================================================================

// 👍 Good
function * generator () {}
var anonymous = function * () {};
var shorthand = {* generator () {}};

// 👎 Missing space before or after *.
function *generator () {}
var anonymous = function* () {};
var shorthand = {*generator () {}};

class Class {
  static* method () {}
}

//=======================================================================
// arrow-parens
//=======================================================================

// 👎 Expected parenthesis around arrow function argument.
a => {};
a => a;
a => {
  return a;
};
a.then(foo => {});
a.then(foo => a);
a(foo => {
  if (c) b++;
});

//=======================================================================
// prefer-allow-callback
//=======================================================================

// 👎 Unexpected function expression.
foo(function (a) {
});

// 👍 Good
foo((a) => a);
foo(function bar () {}); // Allowed named functions
foo(function () { // Allowed unbound functions to refer to this
  return this.a;
});
