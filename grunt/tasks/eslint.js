/* globals module */
module.exports = {
  options: {
    configFile: '<%= paths.src.js %>/config/eslint.json'
  },
  target: [
    '<%= paths.src.js %>**/*.js',
    '<%= paths.lint %>'
  ]
};
