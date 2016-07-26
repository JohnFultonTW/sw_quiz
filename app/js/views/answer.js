import React, { PropTypes } from 'react';

class Answer extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({answer: ''});
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({answer: value});
  }

  handleClick() {
    this.props.onAnswer(this.state.answer);
  }

  render() {
    return (
      <div>
        <input className="mdl-textfield__input" type="text" value={this.state.answer} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>
    );
  }
}

Answer.propTypes = {
  onAnswer: PropTypes.func.isRequired
};

export default Answer;
