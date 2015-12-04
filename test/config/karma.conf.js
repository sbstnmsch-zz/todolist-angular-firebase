/* globals module exports */
var
  proxy = require('../../grunt/options/browserstack.json').proxy;

require('global-tunnel').initialize({
  host: 'proxy.inf.epost-dev.de',
  port: 8080
});

var
  webDriverConfig = {
    hostname: 'selenium-hub-1.bis.epost-dev.de',
    port: 4444
  };

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'bower_modules/mui-common-js/dist/javascript/mui-common-js.min.js',
      'bower_modules/angular-mocks/angular-mocks.js',
      'bower_modules/jquery/dist/jquery.js',
      'bower_modules/lodash/lodash.js',
      'app/templates/*.html',
      'test/unit/**/*.js',
      'test/directives/**/*.js'
    ],

    // Webpack
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'app/templates/*.html': ['ng-html2js']
    },

    webpack: {
      plugins: [
      ],
      resolve: {
        alias: {
          'config/environment': 'helper/config/environment.js',
          'config/host': 'helper/config/host.js'
        },
        modulesDirectories: [
          'app/javascript/',
          'dist/stylesheets/',
          'bower_modules/',
          'node_modules/',
          'bower_modules/mui-common-js/dist/javascript/',
          'mock/javascript',
          'test'
        ]
      },
      externals: {
        angular: 'angular',
        // fs: A simple stub to avoid webpack errors. fs is only required for mocha runs.
        fs: 'null',
        'pubsub-js': 'PubSub',
        jQuery: 'jQuery',
        lodash: '_'
      },
      module: {
        loaders: [{
          // A stupid hack required for sinon so that it knows it is not running in AMD
          test: /sinon.*\.js$/,
          loader: 'imports?define=>false'
        }, {
          test: /\.json/,
          loader: 'json-loader'
        }, {
          test: /\.css/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.js$/,
          exclude: /(node_modules|bower_modules)/,
          loader: 'babel-loader?optional[]=runtime'
        }]
      }
    },

    webpackMiddleware: {
      noInfo: true,
      quiet: true
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    customLaunchers: {
      IE11: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '11',
        name: 'IE11:Windows 7'
      },
      IE10: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '10',
        name: 'IE10:Windows 7'
      },
      RemoteChrome: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'chrome',
        name: 'Chrome:Windows 7'
      },
      RemoteFirefox: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'firefox',
        name: 'Firefox:Windows 7'
      },
      BSFirefoxWindows: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: '39.0',
        os: 'Windows',
        os_version: '8'
      },
      BSIE10Windows: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '11.0',
        os: 'Windows',
        os_version: '8.1'
      },
      BSIE11Windows: {
        base: 'BrowserStack',
        browser: 'ie',
        browser_version: '10.0',
        os: 'Windows',
        os_version: '8'
      }
    },
    browsers: [
      'Chrome'
    ],
    // Which plugins to enable
    plugins: [
      'karma-html2js-preprocessor',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-webdriver-launcher',
      'karma-browserstack-proxy-launcher',
      'karma-teamcity-reporter',
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-ng-html2js-preprocessor'
    ],
    singleRun: false,
    colors: true,
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
