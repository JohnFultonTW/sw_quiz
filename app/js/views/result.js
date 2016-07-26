import React, { PropTypes } from 'react';

class Result extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.show ? '' : 'hidden'}>
        <div className="result-icon-container">
          <i className={'material-icons result-icon ' + (this.props.correct ? 'icon-success' : 'icon-fail')}>{this.props.correct ? 'done' : 'close'}</i>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  show: PropTypes.bool.isRequired,
  correct: PropTypes.bool.isRequired
};

export default Result;
