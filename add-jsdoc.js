'use strict';

module.exports = {
  plugins: [
    'jsdoc',
  ],
  settings: {
    jsdoc: {
      baseConfig: {rules: {strict: 'off'}},
      // Configure a preferred alias name for a JSDoc tag
      tagNamePreference: {
        augments: 'extends', // Prefer @extends over @augments
      },
      // Use any of the following settings to override require-param
      // and allow @param to be omitted when the specified tags are present on the JSDoc comment
      // or the parent class comment. The default value for each is false
      allowOverrideWithoutParam: true, // Enables behavior with @override tag
      allowImplementsWithoutParam: true, // Enables behavior with @implements tag
      allowAugmentsExtendsWithoutParam: true, // Enables behavior with @augments tag or its synonym @extends
    },
  },
  rules: {
    // Ensures that parameter names in JSDoc match those in the function declaration.
    'jsdoc/check-param-names': 'error',
    // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
    'jsdoc/check-examples': 'off',
    // Reports invalid block tag names.
    // Valid JSDoc 3 Block Tags are: http://usejsdoc.org/#block-tags
    'jsdoc/check-tag-names': 'error',
    // Reports invalid types.
    // Ensures that case of native types is the same as in this list:
    // boolean, number, string, Object, Array, Date, RegExp
    'jsdoc/check-types': 'error',
    // Checks that types in jsdoc comments are defined.
    'jsdoc/no-undefined-types': 'error',
    // Requires that block description and tag description are written in complete sentences, i.e.,
    // - Description must start with an uppercase alphabetical character.
    // - Paragraphs must start with an uppercase alphabetical character.
    // - Sentences must end with a period.
    // - Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.
    'jsdoc/require-description-complete-sentence': 'error',
    // Requires that all functions have a description.
    // - All functions must have a @description tag.
    // - Every description tag must have a non-empty description that explains the purpose of the method.
    'jsdoc/require-description': 0,
    // Requires that @param tag has type value.
    'jsdoc/require-param-type': 'error',
    // Requires that all function parameters are documented.
    'jsdoc/require-param': 'error',
    // Requires that @returns tag has type value.
    'jsdoc/require-returns-type': 'error',
    // Checks if the return expression exists in function body and in the comment.
    'jsdoc/require-returns-check': 'error',
    // Requires returns are documented.
    'jsdoc/require-returns': 'error',
    // Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
    'jsdoc/valid-types': 'error',
  },
};
