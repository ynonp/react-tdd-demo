# React Karma TDD Stater

A starter project for react client side web application utilizing karma and mocha for TDD.

## What's in the box

1. React
2. Webpack
3. Mocha / Sinon / Chai
4. Karma

## Getting Started

1. Run once:

		npm install 

2. Build bundle.js with:

		webpack

3. Start a test run with:

		./node_modules/karma/bin/karma start

## Configuration and files
React TDD starter includes the following:

1. `webpack.config.js` A webpack configuration file for normal builds 
2. `tests.webpack.js` A webpack configuration file for test environment
3. `package.json` Lists project dependencies
4. `karma.conf.js` Defines karma testing configuration
5. `index.html` Main html file which includes React and bundle.js

