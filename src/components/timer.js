var React = require('react');

var Timer = React.createClass({
  propTypes: {
    onTimeout: React.PropTypes.func,
    timeout: React.PropTypes.number.isRequired
  },
  getInitialState: function () {
    return { timer: null };
  },
  componentDidMount: function() {
    this.startTimer();
  },
  componentWillUnmount: function() {
    clearTimeout(this.state.timer);
  },
  resetTimeout: function() {
    clearTimeout(this.state.timer);
    this.startTimer();
  },
  startTimer: function() {
    this.state.timer = setTimeout(function() {
      if ( this.props.onTimeout ) {
        this.props.onTimeout();
      }
      this.startTimer();
    }.bind(this), this.props.timeout * 1000);
  },
  render: function () {
    return false;
  }
});

module.exports = Timer;

