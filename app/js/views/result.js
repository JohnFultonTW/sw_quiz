import React, { PropTypes } from 'react';

class Result extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.show ? '' : 'hidden'}>
        <div className="app__icon">
          <i className="material-icons">{this.props.correct ? 'done' : 'close'}</i>
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
