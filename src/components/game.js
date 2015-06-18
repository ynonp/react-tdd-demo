var React = require('react');
var _ = require('underscore');
var Timer = require('timer');

var Game = React.createClass({
  propTypes: { cells: React.PropTypes.number.isRequired },
  getInitialState: function () {
    return { winner: this.getRandomCell() };
  },
  getRandomCell: function() {
    return _.sample(_.range(this.props.cells));
  },
  clicked: function(index) {
    if ( index === this.state.winner ) {
      this.setState({winner: this.getRandomCell()});
    }
  },
  renderItem: function(item, index) {
    var cls = (index === this.state.winner) ? "square winner" : "square";
    return <div key={item} onClick={this.clicked.bind(this,index)} className={cls}></div>
  },
  timeout: function() {
    console.log('timeout');
  },
  render: function () {
    return (
      <div>
        <Timer timeout={2} onTimeout={this.timeout} />
      { _.map(_.range(this.props.cells), this.renderItem)}
      </div>
    )
  }
});

module.exports = Game;

