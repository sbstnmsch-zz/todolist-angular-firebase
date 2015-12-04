module.exports = {
  options: {
    browsers: ['> 1%', 'last 2 versions', 'Explorer >= 10']
  },
  css: {
    expand: true,
    cwd: '<%= paths.dist.css %>/.tmp',
    src: '**/*.stylused.css',
    ext: '.css',
    dest: '<%= paths.dist.css %>/'
  }
};
