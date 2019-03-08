/* eslint-disable no-unused-vars,no-redeclare, no-undef,
no-constant-condition, one-var, no-unreachable */

//=======================================================================
// curly
//=======================================================================

// 👎 Expected {.
if (foo) bar();
else {
  foo++;
}
if (foo) {
  bar();
  baz();
} else
  buz();
if (foo)
  bar();
else if (faa)
  bor();
else {
  other();
  things();
}
if (true)
  foo;
if (true)
  foo();
else {
  baz();
}

// 👍 Good
if (foo) {
  foo++;
}
if (foo) {
  foo++;
} else {
  bar();
}
if (foo) bar();
while (true) {
  doSomething();
}
while (true) doSomething();
for (var i = 0; i < items.length; i++) {
  doSomething();
}

//=======================================================================
// brace-style
//=======================================================================

// 👎 Expected a line break after the opening brace and the before the closing brace.
function foo ()
{
  return true;
}
if (foo)
{
  bar();
}
try
{
  somethingRisky();
} catch (e)
{
  handleError();
}
if (foo) {
  bar();
}
else {
  baz();
}
if (foo) bar();
else if (baz) boom();
