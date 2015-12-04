var
  sinon = require('sinon'),
  _ = require('lodash');

module.exports = {
  pubsub: function() {
    var _callbacks = [];

    return {
      fn: [function() {
        var
          _publish = sinon.spy(),
          _acknowledge = sinon.spy(),
          _acknowledgedPublish = sinon.spy(),
          _subscribe = function(topic, callback) {
            _callbacks[topic] = callback;
            _publish(topic, callback);
          };

        return {
          subscribe: _subscribe,
          publish: _publish,
          acknowledge: _acknowledge
        };
      }],
      trigger: function(topic, payload) {
        _callbacks[topic](topic, payload);
      }
    };
  },
  $firebaseArray: function(items) {
    items.$save = sinon.spy();
    items.$add = sinon.spy();
    items.$remove = sinon.spy();

    return items;
  },
  $firebaseAuth: function(Ref) {
    return {
      $onAuth: sinon.spy(),
      $authWithOAuthPopup: sinon.spy()
    };
  },
  Ref: function() {
    var _refs = {};

    return {
      fn: [function() {
        var
          _child = function(refName) {
            return _refs[refName];
          };

        return {
          child: _child
        };
      }],
      setRef: function(refName, payload) {
        _refs[refName] = payload;
      },
      getRef: function(refName) {
        return _refs[refName];
      }
    };
  },
  state: function() {
    var
      _params = {},
      _current = {
        name: undefined,
        parent: undefined
      },
      _go = sinon.spy();

    return {
      fn: [function() {
        return {
          params: _params,
          current: _current,
          go: _go
        };
      }],
      params: _params,
      go: _go,
      current: _current
    };
  },
  analytics: function() {
    return {
      fn: [function() {
        return {
          trackInteraction: sinon.spy(),
          trackPage: sinon.spy(),
          trackEvent: sinon.spy(),
          trackDialog: sinon.spy()
        };
      }]
    };
  },
  localstorage: function() {
    return {
      fn: [function() {
        return {
          set: sinon.stub(),
          get: sinon.stub(),
          remove: sinon.stub()
        };
      }]
    };
  }
};
