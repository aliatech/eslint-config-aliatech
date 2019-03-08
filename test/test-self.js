'use strict';

const eslint = require('eslint');
const glob = require('glob');
const should = require('should');

describe('Test style validity of this project', () => {
  const files = glob.sync('./*.js').concat(glob.sync('./test/*.js'));
  let report;

  before(() => {
    report = new eslint.CLIEngine().executeOnFiles(files);
  });

  it('Should not find code style issues', () => {
    should.exist(report);
    report.errorCount.should.eql(0);
    report.warningCount.should.eql(0);
  });

  it('Should not use deprecated rules', () => {
    report.usedDeprecatedRules.should.be.empty();
  });
});
