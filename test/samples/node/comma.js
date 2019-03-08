/* eslint-disable no-unused-vars, no-redeclare, no-undef, padded-blocks, one-var */

//=======================================================================
// comma-dangle
//=======================================================================

// 👎 Missing or unexpected trailing comma.
var foo = {
  bar: 'baz',
  qux: 'quux'
};
var foo = {bar: 'baz', qux: 'quux',};
var arr = [1, 2,];
var arr = [1,
  2,];
var arr = [
  1,
  2
];
bar({
  bar: 'baz',
  qux: 'quux'
});

//=======================================================================
// comma-style
//=======================================================================

// 👎 bad line breaking before and after ','
var foo = 1
  ,
    bar = 2;

// 👎 ',' should be placed last
var foo = 1
  , bar = 2;
var foo = ['apples'
  , 'oranges'];

function bar () {
  return {
    a: 1
    ,b: 2,
  };
}
