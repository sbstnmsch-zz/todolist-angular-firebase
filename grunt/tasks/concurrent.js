module.exports = {
  serve: {
    tasks: [
      'webpack-dev-servr:serve',
      'watch:stylus',
      'watch:templates'
    ],
    options: {
      logConcurrentOutput: true
    }
  }
};
