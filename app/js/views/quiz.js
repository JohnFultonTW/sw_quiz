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
    QuestionUtils.getRandomQuestion().then( question => {
      this.setState({ question: question });
    });
    this.setState({
      answered: false
    });
  }

  handleAnswer(answer) {
    let correct = this.state.question.answer(this.state.question.entity) == answer;
    this.setState({
      answered: true,
      correct
    });
  }

  getQuestion() {
    if (this.state.question) {
      return this.state.question.text(this.state.question.entity);
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <Ask question={this.getQuestion()} />
        <Answer onAnswer={this.handleAnswer.bind(this)}/>
        <Result show={this.state.answered} correct={this.state.correct || false}/>
      </div>
    );
  }
}

export default Quiz;
