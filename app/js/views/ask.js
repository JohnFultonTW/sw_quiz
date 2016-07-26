import React, { PropTypes } from 'react';

class Ask extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>{this.props.question}</div>);
  }
}

Ask.propTypes = {
  question: PropTypes.string.isRequired
};

export default Ask;
