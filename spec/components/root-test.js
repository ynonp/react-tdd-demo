var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('chai').expect;
var Root = require('components/root');

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).to.be.ok;
  });
});
