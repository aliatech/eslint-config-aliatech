/* eslint-disable no-magic-numbers */

'use strict';

const eslint = require('eslint');
const glob = require('glob');
const path = require('path');
const should = require('should');
const _ = require('lodash');

describe('Test Node lint rules', () => {
  const files = glob.sync('./test/samples/node/**/*.js');
  let report, results;

  before(() => {
    report = new eslint.CLIEngine().executeOnFiles(files);
    results = _.keyBy(report.results, (result) => {
      return path.basename(result.filePath, '.js');
    });
  });

  it('Should report all files', () => {
    results.should.have.keys('comments', 'max-len', 'indent', 'jsdoc');
  });

  it('Should not use deprecated rules', () => {
    report.usedDeprecatedRules.should.be.empty();
  });

  it('Should detect comment style issues', () => {
    // report.errorCount.should.eql(0);
    // report.warningCount.should.eql(0);
    const messages = results.comments.messages;
    const spacedComment1 = _.find(messages, {ruleId: 'spaced-comment', line: 3});
    should.exist(spacedComment1);
  });

  it('Should detect max-len style issues', () => {
    const messages = results['max-len'].messages;
    const maxLen1 = _.find(messages, {ruleId: 'max-len', line: 1});
    should.exist(maxLen1);
  });

  it('Should detect indent style issues', () => {
    _(results.indent.messages)
      .filter((message) => message.ruleId === 'indent')
      .map('line').value()
      .should.be
      .eql([]
        .concat([16, 17, 18, 19]) // SwitchCase
        .concat([33, 34]) // VariableDeclarator
        .concat([52, 53, 54]) // outerIIFEBody
        .concat([70, 71]) // MemberExpression
        .concat([85]) // FunctionDeclaration
        .concat([100]) // FunctionExpression
        .concat([114]) // CallExpression
        .concat([135, 136]) // ArrayExpression
        .concat([156]) // ObjectExpression
        .concat([172, 173]) // flatTernaryExpressions
      );
  });

  it('Should detect variable style issues', () => {
    const messages = _(results.vars.messages);
    messages
      .filter((message) => message.ruleId === 'no-var')
      .map('line').value().should.be.eql([8, 9]);
    messages
      .filter((message) => message.ruleId === 'prefer-const')
      .map('line').value().should.be.eql([21]);
  });

  it('Should detect semicolon style issues', () => {
    const messages = _(results.semi.messages);
    messages
      .filter((message) => message.ruleId === 'semi-spacing')
      .map('line').value().should.be.eql([8, 11, 18]);
    messages
      .filter((message) => message.ruleId === 'no-extra-semi')
      .map('line').value().should.be.eql([18]);
    messages
      .filter((message) => message.ruleId === 'semi')
      .map('line').value().should.be.eql([26]);
    messages
      .filter((message) => message.ruleId === 'semi-style')
      .map('line').value().should.be.eql([34]);
  });

  it('Should detect padding style issues', () => {
    const messages = _(results.padding.messages);
    messages
      .filter((message) => message.ruleId === 'padding-line-between-statements')
      .map('line').value().should.be.eql([10, 14, 16]);
    messages
      .filter((message) => message.ruleId === 'padded-blocks')
      .map('line').value().should.be.eql([23, 27, 30, 33, 36, 41]);
    messages
      .filter((message) => message.ruleId === 'lines-between-class-members')
      .map('line').value().should.be.eql([52]);
    messages
      .filter((message) => message.ruleId === 'no-multi-spaces')
      .map('line').value().should.be.eql(_.range(62, 67)/* 62..66 */);
    messages
      .filter((message) => message.ruleId === 'key-spacing')
      .map('line').value().should.be.eql([73, 76]);
    messages
      .filter((message) => message.ruleId === 'space-infix-ops')
      .map('line').value().should.be.eql(_.range(83, 91)/* 83..90 */);
    messages
      .filter((message) => message.ruleId === 'space-in-parens')
      .map('line').value().should.be.eql([97, 98, 99, 99, 100, 100, 101, 101]);
    messages
      .filter((message) => message.ruleId === 'keyword-spacing')
      .map('line').value().should.be.eql([108, 109, 110]);
    messages
      .filter((message) => message.ruleId === 'space-unary-ops')
      .map('line').value().should.be.eql(_.range(117, 125)/* 117..124 */);
    messages
      .filter((message) => message.ruleId === 'object-curly-spacing')
      .map('line').value().should.be.eql([131, 131, 132, 133, 134, 135]);
    messages
      .filter((message) => message.ruleId === 'array-bracket-spacing')
      .map('line').value()
      .should.be
      .eql([]
        .concat([142, 142, 143, 143, 144, 145, 146, 146])
        .concat([147, 147, 148, 148, 149, 149, 150, 150]),
      );
    messages
      .filter((message) => message.ruleId === 'computed-property-spacing')
      .map('line').value().should.be.eql([157, 158, 159, 159, 160, 160]);
    messages
      .filter((message) => message.ruleId === 'comma-spacing')
      .map('line').value()
      .should.be.eql([167, 167, 168, 169, 169, 170, 170, 171, 171, 172, 172, 173, 173]);
  });

  it('Should detect function style issues', () => {
    const messages = _(results.functions.messages);
    messages
      .filter((message) => message.ruleId === 'space-before-function-paren')
      .map('line').value().should.be.eql([8, 11, 14, 18, 23, 27]);
    messages
      .filter((message) => message.ruleId === 'arrow-spacing')
      .map('line').value().should.be.eql(_.range(34, 40)/* 34..39 */);
    messages
      .filter((message) => message.ruleId === 'generator-star-spacing')
      .map('line').value().should.be.eql([51, 52, 53, 56]);
    messages
      .filter((message) => message.ruleId === 'arrow-parens')
      .map('line').value().should.be.eql([64, 65, 66, 69, 70, 71]);
    messages
      .filter((message) => message.ruleId === 'prefer-arrow-callback')
      .map('line').value().should.be.eql([80]);
  });

  it('Should detect line style issues', () => {
    const messages = _(results.lines.messages);
    messages
      .filter((message) => message.ruleId === 'object-curly-newline')
      .map('line').value().should.be.eql([19, 19, 20, 21, 22, 22, 23, 24]);
    messages
      .filter((message) => message.ruleId === 'no-multiple-empty-lines')
      .map('line').value().should.be.eql([32, 37]);
  });

  it('Should detect brace style issues', () => {
    const messages = _(results.braces.messages);
    messages
      .filter((message) => message.ruleId === 'curly')
      .map('line').value().should.be.eql([9, 16, 18, 20, 26, 28]);
    messages
      .filter((message) => message.ruleId === 'brace-style')
      .map('line').value().should.be.eql([58, 62, 66, 69, 74]);
  });

  it('Should detect comma style issues', () => {
    const messages = _(results.comma.messages);
    messages
      .filter((message) => message.ruleId === 'comma-dangle')
      .map('line').value().should.be.eql([10, 12, 13, 15, 18, 22]);
    messages
      .filter((message) => message.ruleId === 'comma-style')
      .map('line').value().should.be.eql([31, 36, 38, 43]);
  });

  it('Should detect readability issues', () => {
    const messages = _(results.readability.messages);
    messages
      .filter((message) => message.ruleId === 'strict')
      .map('line').value().should.be.eql([9]);
    messages
      .filter((message) => message.ruleId === 'dot-notation')
      .map('line').value().should.be.eql([9, 10]);
    messages
      .filter((message) => message.ruleId === 'prefer-template')
      .map('line').value().should.be.eql([24, 25]);
    messages
      .filter((message) => message.ruleId === 'quotes')
      .map('line').value().should.be.eql([35]);
    messages
      .filter((message) => message.ruleId === 'object-shorthand')
      .map('line').value().should.be.eql([48]);
    messages
      .filter((message) => message.ruleId === 'yoda')
      .map('line').value().should.be.eql([62, 64, 66, 68, 70]);
    messages
      .filter((message) => message.ruleId === 'quote-props')
      .map('line').value().should.be.eql([79, 80, 81, 82]);
  });

  it('Should detect design issues', () => {
    const messages = _(results.design.messages);
    messages
      .filter((message) => message.ruleId === 'no-magic-numbers')
      .map('line').value().should.be.eql([9]);
    messages
      .filter((message) => message.ruleId === 'no-throw-literal')
      .map('line').value().should.be.eql([24, 25, 26, 28, 30]);
  });

  it('Should detect efficiency issues', () => {
    const messages = _(results.efficiency.messages);
    messages
      .filter((message) => message.ruleId === 'no-useless-concat')
      .map('line').value().should.be.eql(_.range(8, 13)/* 8..12 */);
  });

  it('Should detect vulnerabilities issues', () => {
    const messages = _(results.vulnerabilities.messages);
    messages
      .filter((message) => message.ruleId === 'no-buffer-constructor')
      .map('line').value().should.be.eql(_.range(8, 14)/* 8..13 */);
    messages
      .filter((message) => message.ruleId === 'no-path-concat')
      .map('line').value().should.be.eql([20, 21]);
    messages
      .filter((message) => message.ruleId === 'no-self-compare')
      .map('line').value().should.be.eql([29]);
    messages
      .filter((message) => message.ruleId === 'no-unused-expressions')
      .map('line').value().should.be.eql(_.range(38, 50)/* 38..49 */);
    messages
      .filter((message) => message.ruleId === 'prefer-promise-reject-errors')
      .map('line').value().should.be.eql([60, 61, 62, 64, 67]);
    messages
      .filter((message) => message.ruleId === 'eqeqeq')
      .map('line').value().should.be.eql([76, 77, 78, 79]);
  });

  it('Should detect jsdoc style issues', () => {
    const messages = _(results.jsdoc.messages);
    messages
      .filter((message) => message.ruleId === 'jsdoc/check-param-names')
      .map('line').value().should.be.eql([27, 34]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/check-examples')
      .map('line').value().should.be.eql([/* 48 */]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/check-tag-names')
      .map('line').value().should.be.eql([63, 70]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/check-types')
      .map('line').value().should.be.eql([88]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/no-undefined-types')
      .map('line').value().should.be.eql([99]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-description-complete-sentence')
      .map('line').value().should.be.eql([109, 116]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-param-type')
      .map('line').value().should.be.eql([129]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-param')
      .map('line').value().should.be.eql([146]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-returns-type')
      .map('line').value().should.be.eql([158]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-returns-check')
      .map('line').value().should.be.eql([169]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/require-returns')
      .map('line').value().should.be.eql([180]);
    messages
      .filter((message) => message.ruleId === 'jsdoc/valid-types')
      .map('line').value().should.be.eql([193]);
  });
});
