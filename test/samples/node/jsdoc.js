/* eslint-disable no-unused-vars, no-redeclare, strict */

//=======================================================================
// jsdoc/check-param-names
//=======================================================================

// 👍 Good
/**
 * @param {string} foo
 * @returns {number}
 */
function quux (foo) {
  return 1;
}

// 👍 Good
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
function assign (employees) {
}

// 👎 Expected @param names to be "foo". Got "Foo".
/**
 * @param {string} Foo
 */
function quux (foo) {
}

// 👎 @param "bar" does not match an existing function parameter.
/**
 * @param {string} foo
 * @param {string} bar
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/check-examples
//=======================================================================

// 👎 @example error (semi): Missing semicolon.
/**
 * @example <caption>Valid usage</caption>
 * quux() // does something useful
 *
 * @example <caption>Invalid usage</caption>
 * quux('random unwanted arg'); // results in an error
 */
function quux () {
}

//=======================================================================
// jsdoc/check-tag-names
// Valid JSDoc 3 Block Tags are: http://usejsdoc.org/#block-tags
//=======================================================================

// 👎 Invalid JSDoc tag name "foo".
/**
 * @foo
 */
function quux () {
}

// 👎 Invalid JSDoc tag (preference). Replace "return" JSDoc with "returns".
/**
 * @return {number}
 */
function quux () {
}

//=======================================================================
// jsdoc/check-types
//=======================================================================

// 👍 Good
/**
 * @param {Array.<{myNumber: number, myString: string, myArray: Array}>} foo
 */
function quux (foo) {
}

// 👎 Invalid JSDoc @param "foo" type "Number".
/**
 * @param {Number} foo Foo description.
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/no-undefined-types
//=======================================================================

// 👎 The type 'strnig' is undefined.
/**
 * @param {strnig} foo - Bar.
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/require-description-complete-sentence
//=======================================================================

// 👎 Sentence must end with a period.
/**
 * Foo
 */
function quux () {
}

// 👎 Sentence should start with an uppercase character.
/**
 * Foo.
 * @param {string} foo foo.
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/require-param-type
//=======================================================================

// 👎 Missing JSDoc @param "foo" type.
/**
 * @param foo
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/require-param
//=======================================================================

// 👍 Good
/**
 * @extends something
 */
function quux (foo) {
}

// 👎 Missing JSDoc @param "foo" declaration.
/**
 *
 */
function quux (foo) {
}

//=======================================================================
// jsdoc/require-returns-type
//=======================================================================

// 👎 Missing JSDoc @return type.
/**
 * @returns
 */
function quux () {
  return 1;
}

//=======================================================================
// jsdoc/require-returns-check
//=======================================================================

// 👎 Present JSDoc @returns declaration but not available return expression in function.
/**
 * @returns {number}
 */
function quux () {
}

//=======================================================================
// jsdoc/require-returns
//=======================================================================

// 👎 Missing JSDoc @returns declaration.
/**
 * Quux description.
 */
function quux () {
  return 1;
}

//=======================================================================
// jsdoc/valid-types
//=======================================================================

// 👎 Syntax error in type: Array<string
/**
 * @param {Array<string} foo
 */
function quux (foo) {

}
