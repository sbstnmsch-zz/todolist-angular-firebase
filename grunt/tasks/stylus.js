module.exports = {
  css: {
    options: {
      compress: false,
      linenos: false,
      urlfunc: 'embedurl'
    },
    expand: true,
    cwd: '<%= paths.src.css %>/',
    src: [
      '**/*.styl',
      '!config/*.styl'
    ],
    dest: '<%= paths.dist.css %>/.tmp',
    ext: '.stylused.css'
  }
};
