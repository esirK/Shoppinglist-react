// This file is written in ES5.
/**
 * This file does the following:
 * 1. Sets Node environment variable
 * 2. Registers babel for transpiling our code for testing
 * 3. Disables Webpack-specific features that Mocha doesn't understand.
 * 4. Requires jsdom so we can test via an in-memory DOM in Node
 * 5. Sets up global vars that mimic a browser.
**/

process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5 before tests run.
require('babel-register')();

// Disable webpack-specific features that Mocha doesn't understand.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// simulate a browser environment for tests.
let jsdom = require('jsdom').jsdom;

let exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef