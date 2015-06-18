var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Game = require('components/game');
var expect = chai.expect;
var _ = require("underscore");

describe('game', function () {
  it('renders without problems', function () {
    var game = TestUtils.renderIntoDocument(<Game cells={9} />);
    expect(game).to.be.ok;
  });

  describe('Squares', function() {
    var game;
    beforeEach(function() {
      game = TestUtils.renderIntoDocument(<Game cells={9} />);
    });
    it('renders div.square child nodes', function() {
      var squares = TestUtils.scryRenderedDOMComponentsWithClass(game, "square");
      expect(squares.length).to.eq(9);
    });

    it('has a single winner', function() {
      var winners = TestUtils.scryRenderedDOMComponentsWithClass(game, "winner");
      expect(winners.length).to.eq(1);
    });
  });

  describe('Winner', function() {
    it('is selected randomly using _.sample', function() {
      sinon.stub(_, "sample").returns(42);

      var game = TestUtils.renderIntoDocument(<Game cells={3} />);
      expect(game.state.winner).to.eq(42);

      _.sample.restore();
    });

    it('is changed with every click', function() {
      var stub = sinon.stub(_, "sample");
      stub.onCall(0).returns(1);
      stub.onCall(1).returns(2);

      var game = TestUtils.renderIntoDocument(<Game cells={3} />);
      var winnerEl = TestUtils.findRenderedDOMComponentWithClass(game, 'winner');

      TestUtils.Simulate.click(winnerEl);

      expect(game.state.winner).to.eq(2);

      stub.restore();
    });

    it('remains one after click', function() {
      var stub = sinon.stub(_, "sample");
      stub.onCall(0).returns(1);
      stub.onCall(1).returns(2);

      var game = TestUtils.renderIntoDocument(<Game cells={3} />);
      var winnerEl = TestUtils.findRenderedDOMComponentWithClass(game, 'winner');

      TestUtils.Simulate.click(winnerEl);

      var winners = TestUtils.scryRenderedDOMComponentsWithClass(game, 'winner');
      expect(winners.length).to.eq(1);

      _.sample.restore();
    });

    it('does not change when clicking on a non-winning square', function() {
      var stub = sinon.stub(_, "sample");
      stub.onCall(0).returns(1);
      stub.onCall(1).returns(2);

      var game = TestUtils.renderIntoDocument(<Game cells={3} />);
      var squares = TestUtils.scryRenderedDOMComponentsWithClass(game, 'square');
      var notWinner = _.find(squares, (el) => ! el.getDOMNode().classList.contains('winner'));

      TestUtils.Simulate.click(notWinner);

      expect(game.state.winner).to.eq(1);

      _.sample.restore();
    });
  });
});
