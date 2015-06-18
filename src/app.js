var React = require('react');
var Root = require('./components/root');
var Game = require('./components/game');

React.render(<Game cells={9} />, document.body);
