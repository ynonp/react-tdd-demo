var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Game = require('components/game');
var expect = chai.expect;
var _ = require("underscore");
var rewire = require('rewire');
var Timer = require('components/timer');

var ReactNoop = React.createClass({render: function() { return false }});

describe('Mocked Timer', function() {
  it('renders without the timer', function() {
    var Game = rewire('components/game');
    Game.__set__('Timer', ReactNoop);
    var game = TestUtils.renderIntoDocument(<Game cells={3} />);
    var squares = TestUtils.scryRenderedDOMComponentsWithClass(game, 'square');
    var timerEl = TestUtils.scryRenderedComponentsWithType(game, Timer);

    expect(squares.length).to.eq(3);
    expect(timerEl.length).to.eq(0);
  });

  it('renders with the timer', function() {
    var game = TestUtils.renderIntoDocument(<Game cells={3} />);
    var squares = TestUtils.scryRenderedDOMComponentsWithClass(game, 'square');
    var timerEl = TestUtils.scryRenderedComponentsWithType(game, Timer);

    expect(squares.length).to.eq(3);
    expect(timerEl.length).to.eq(1);
  });

  it('renders without once again', function() {
    var Game = rewire('components/game');
    Game.__set__('Timer', ReactNoop);
    var game = TestUtils.renderIntoDocument(<Game cells={3} />);
    var squares = TestUtils.scryRenderedDOMComponentsWithClass(game, 'square');
    var timerEl = TestUtils.scryRenderedComponentsWithType(game, Timer);

    expect(squares.length).to.eq(3);
    expect(timerEl.length).to.eq(0);
  });
});

