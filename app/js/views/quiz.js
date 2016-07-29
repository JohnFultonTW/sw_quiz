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
    this.getNewQuestion();
  }

  handleAnswer(answer) {
    let correct = this.state.question.answer(this.state.question.entity) == answer;
    this.setState({
      answered: true,
      correct
    });
    setTimeout(this.getNewQuestion.bind(this), 100);
  }

  getNewQuestion() {
    QuestionUtils.getRandomQuestion().then( question => {
      this.setState({ question: question });
    });
    this.setState({
      answered: false
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
        <div className="card-row">
          <div className="card-padding"></div>
          <div className="mdl-card mdl-shadow--2dp quiz-card">
            <div className="mdl-card__title"><h2 className="mdl-card__title-text">Question</h2></div>
            <div className="mdl-card__supporting-text"><Ask question={this.getQuestion()} /> </div>
            <div className="mdl-card__actions mdl-card--border" ><Answer onAnswer={this.handleAnswer.bind(this)}/></div>
            <Result show={this.state.answered} correct={this.state.correct || false}/>
          </div>
          <div className="card-padding"></div>
        </div>
      </div>
    );
  }
}

export default Quiz;
