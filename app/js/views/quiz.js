import React from 'react';
import QuestionUtils from '../utils/questionUtils';
import Ask from './ask';
import Answer from './answer';
import Result from './result';

class Quiz extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      question: QuestionUtils.getRandomQuestion(),
      answered: false
    });
  }

  handleAnswer(answer) {
    let outcome = QuestionUtils.determineOutcome(this.state.question, answer);
    this.setState({
      answered: true,
      outcome
    });
  }

  render() {
    return (
      <div>
        <Ask question={QuestionUtils.questionText(this.state.question)} />
        <Answer onAnswer={this.handleAnswer.bind(this)}/>
        <Result show={this.state.answered} outcome={this.state.outcome}/>
      </div>
    );
  }
}

export default Quiz;
