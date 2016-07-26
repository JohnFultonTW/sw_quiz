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
				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" type="text" id="sample1" value={this.state.answer} onChange={this.handleChange.bind(this)} />
					<label className="mdl-textfield__label" htmlFor="sample1">Answer...</label>
				</div>
        <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.handleClick.bind(this)}>Answer</button>
    </div>
      );
  }
}

Answer.propTypes = {
  onAnswer: PropTypes.func.isRequired
};

export default Answer;
