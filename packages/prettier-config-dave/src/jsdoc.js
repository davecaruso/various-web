/** @type {import('prettier').Config & import('../types/prettier-plugin-jsdoc').JsdocOptions} */
const config = {
  jsdocAddDefaultToDescription: false,
  jsdocCapitalizeDescription: true,
  jsdocDescriptionTag: false,
  jsdocDescriptionWithDot: true,
  jsdocKeepUnParseAbleExampleIndent: false,
  jsdocParser: true,
  jsdocPreferCodeFences: true,
  jsdocSeparateReturnsFromParam: false,
  jsdocSeparateTagGroups: true,
  jsdocSingleLineComment: true,
  jsdocSpaces: 1,
  jsdocVerticalAlignment: false,
  tsdoc: true,

  plugins: [require.resolve('prettier-plugin-jsdoc')],
};

module.exports = config;
