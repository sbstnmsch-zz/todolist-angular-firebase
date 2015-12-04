module.exports = {
  injectDependencies: function(component) {
    component.fn.$inject = component.dependencies;

    return component.fn;
  },
  expect: (function() {
    'use strict';
    var chai = require('chai');
    chai.use(require('chai-as-promised'));
    chai.use(require('chai-things'));
    return chai;
  }()).expect,
  mocks: {
    angularBefore: function() {
      if (typeof window.angularMocksBeforeEach !== 'undefined') {
        window.angularMocksBeforeEach();
      }
    },
    angularAfter: function() {
      if (typeof window.angularMocksAfterEach !== 'undefined') {
        window.angularMocksAfterEach();
      }
    }
  }
};
