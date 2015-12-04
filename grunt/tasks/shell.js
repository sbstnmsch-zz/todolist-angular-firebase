module.exports = {
  webpack: {
    command: 'npm run-script _build'
  },
  stylint: {
    command: './node_modules/.bin/stylint <%= paths.src.css %> -c <%= paths.src.css %>/.stylintrc'
  }
};
