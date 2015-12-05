[![Build Status](https://travis-ci.org/sbstnmsch/todolist-angular-firebase.svg?branch=master)](https://travis-ci.org/sbstnmsch/todolist-angular-firebase)

# A simple chat todo app (todolist)

> Ever wanted to have a todo list as tasks but still others being able to assign themselves to them? With todolist you can. Simple pretend to be chatting among team members while every message is a todo which can be completed by anyone.


# Prerequesites
Use a Unix-flavoured machine and install:
- git
- node 5
- npm

## Install and start
```
> npm install
> npm start
```

After that open http://localhost:3000

### Grunt tasks

All available grunt tasks can be found in `grunt/tasks`. By conventions
tasks prefixed with a `_` are not meant to be executed alone and are
considered helper tasks.

1. `grunt [default]`
  - builds the app's assets to `/dist` for production
- `grunt serve`
  - builds and packages the app for development
- `grunt test` (local use)
  - lints, runs mocha and karma tests
- `local-watch` (local use)
  - runs mocha tests but waches for changes
- `grunt local-test` (local use)
  - lints, runs mocha and karma tests in addition with protractor
- `grunt local-e2e` (local use)
  - bundles, lints and runs protractor

### CSS

We are using Stylus (http://learnboost.github.io/stylus/), and Stylus only.

## E2E

Elements which are used for E2E testing such as Protractor or Selenium should be flagged with a
data attribute e.g. `data-e2e-target="e2e-navigation-folder"` or `data-e2e-target="e2e-navigation-folder-delete"`. This allows the structure of the DOM to change while not breaking E2E by accident without actually destroying functionality.

# Known issues

1. `grunt local-e2e` gives `Error: Could not find chromedriver at...`
  - Run `$ ./node_modules/grunt-protractor-runner/scripts/webdriver-manager-update`
