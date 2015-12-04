module.exports = {

  comment: 'static assets to be copied right over to dist ==================',

  templatesStraightToDist: {
    expand: true,
    cwd: '<%= paths.src.templates %>',
    src: '**/*',
    dest: '<%= paths.dist.templates %>'
  },

  comment: 'CSS assets copying tasks =======================================',

  cssPlusPeerDependenciesToActionIn: {
    expand: true,
    cwd: '<%= paths.src.css %>',
    src: '**/*',
    dest: '<%= paths.tmp.actionIn %>'
  },
  cssToDist: {
    expand: true,
    cwd: '<%= paths.tmp.actionOut %>',
    src: '**/*.css',
    dest: '<%= paths.dist.css %>'
  },
  actionOutToIn: {
    expand: true,
    cwd: '<%= paths.tmp.actionOut %>',
    src: '**',
    dest: '<%= paths.tmp.actionIn %>'
  }
};
