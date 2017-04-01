var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string,
    timerStatus: React.PropTypes.string,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    // "A function that return a function is a very useful tool." (by the teacher)
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  render: function () {
    var {countdownStatus, timerStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started' || timerStatus === 'started') {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (countdownStatus === 'paused' || timerStatus !== 'started') {
        return (
          <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
