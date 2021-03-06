/* eslint-disable no-unused-vars, one-var, space-before-function-paren */

//=======================================================================
// SwitchCase
//=======================================================================

// 👍 good
switch ('a') {
  case 'a':
    break;
  case 'b':
    break;
}
// 👎 not good
switch(a){
    case "a":
      break;
    case "b":
      break;
}

//=======================================================================
// VariableDeclarator
//=======================================================================

// 👍 good
const a = 1,
      b = 2,
      c = 3;

// 👎 not good
const d = 1,
  e = 2,
  f = 3;

//=======================================================================
// outerIIFEBody
//=======================================================================

// 👍 good
(function () {

  function foo(x) {
    return x + 1;
  }

})();

// 👎 not good
(function () {

function foo(x) {
  return x + 1;
}

})();

//=======================================================================
// MemberExpression
//=======================================================================

// 👍 good
const foo = {};
foo
  .bar
  .baz();

// 👎 not good
foo
.bar
.baz();

//=======================================================================
// FunctionDeclaration
//=======================================================================

// 👍 good
function foo2(bar, baz,
              qux, boop) {
  boop();
}

// 👎 not good
function foo22(bar, baz,
            qux, boop) {
}

//=======================================================================
// FunctionExpression
//=======================================================================

// 👍 good
const foo3 = function (bar, baz,
                       qux, boop) {
  boop();
};

// 👎 not good
const foo32 = function (bar, baz,
      qux, boop) {
  boop();
};

//=======================================================================
// CallExpression
//=======================================================================

// 👍 good
foo3(0, 1,
     2, 3);

// 👎 not good
foo3(0, 1,
  2, 3);

//=======================================================================
// ArrayExpression
//=======================================================================

// 👍 good
const fooArray = [foo,
                  foo2,
                  foo3
];

// 👍 good
const fooArray2 = [
  foo,
  foo2,
  foo3
];

// 👎 not good
const fooArray12 = [foo,
  foo2,
  foo3
];

//=======================================================================
// ObjectExpression
//=======================================================================

// 👍 good
const obj = {
  bar: 1,
  baz: 2
};

// 👍 good
const obj2 = { bar: 1,
               baz: 2
};

// 👎 not good
const obj22 = { bar: 1,
  baz: 2
};

//=======================================================================
// flatTernaryExpressions
//=======================================================================

// 👍 good
const t =
  foo ? 1 :
    foo2 ? 0 :
      foo3;

// 👎 not good
const t2 =
  foo ? 1 :
  foo2 ? 0 :
  foo3;
