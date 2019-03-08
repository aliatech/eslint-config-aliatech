/* eslint-disable one-var, no-unused-vars, no-redeclare, no-undef, no-empty */

//=======================================================================
// padding-line-between-statements
//=======================================================================

// 👎 Expected blank line before this statement.
'use strict';
'use asm';
foo();

// 👎 Expected blank line before this statement.
foo();
class myClass2 {
}
foo();

//=======================================================================
// padded-blocks
//=======================================================================

// 👎 Block must not be padded by blank lines.
if (a) {

  b();

}

// 👎 Block must be padded by blank lines.
class A {
  constructor () {
  }
}

// 👎 Block must not be padded by blank lines.
switch (a) {

  case 0:
    foo();

}

//=======================================================================
// lines-between-class-members
//=======================================================================

// 👎 Expected blank line between class members.
class myClass {

  foo () {
  }
  bar () {
  }

}

//=======================================================================
// no-multi-spaces
//=======================================================================

// 👎 Multiple spaces found.
var a =  1;
if (foo   === "bar") {}
a <<  b
var arr = [1,  2];
a ?  b : c

//=======================================================================
// key-spacing
//=======================================================================

// 👎 Extra space after key.
var obj = {foo : 42};

// 👎 Missing space before value.
var obj = {foo:42};

//=======================================================================
// space-infix-ops
//=======================================================================

// 👎 Operator must be spaced.
a+b
a+ b
a +b
a?b:c
var a={b: 1};
var {a=0} = bar;
function foo (a=0) { }
var foo = bar|0;

//=======================================================================
// space-in-parens
//=======================================================================

// 👎 There should be no spaces inside this paren.
foo( 'bar');
foo('bar' );
foo( 'bar' );
var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );

//=======================================================================
// keyword-spacing
//=======================================================================

// 👎 There should be no spaces inside this paren.
if(a) {}
if (a) {} else{}
do{} while (a);

//=======================================================================
// space-unary-ops
//=======================================================================

// 👎 Unary word operator must be followed by whitespace.
typeof!foo;
void{foo: 0};
new[foo][0];
delete(foo.bar);
++ a;
a --;
- foo;
+ '3';

//=======================================================================
// object-curly-spacing
//=======================================================================

// 👎 Unary word operator must be followed by whitespace.
var obj = { 'foo': 'bar' };
var obj = {'foo': 'bar' };
var obj = { baz: {'foo': 'qux'}, bar};
var obj = {baz: { 'foo': 'qux'}, bar};
var {x } = y;

//=======================================================================
// array-bracket-spacing
//=======================================================================

// 👎 There should no space before or after brackets.
var obj = {foo: [ 'baz', 'bar' ]};
var arr = [ 'foo', 'bar' ];
var arr = ['foo', 'bar' ];
var arr = [ ['foo'], 'bar'];
var arr = [[ 'foo' ], 'bar'];
var [ x, y ] = z;
var [ x, y ] = z;
var [ x, ...y ] = z;
var [ ,, x, ] = z;

//=======================================================================
// computed-property-spacing
//=======================================================================

// 👎 There should no space before or after brackets.
obj[foo ]
obj[ 'foo']
var x = {[ b ]: a};
obj[foo[ bar ]];

//=======================================================================
// comma-spacing
//=======================================================================

// 👎 A space is required after comma and there should be not space before comma.
var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo (a ,b){}
a ,b;

// 👍 Good
foo(a, b);
