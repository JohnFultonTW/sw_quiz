import _ from 'lodash';
import questions from './questions';

let QuestionUtils = {
  questionText: question => {
    return 'yay';
  },

  getRandomQuestion: () => {
    let question = _.sample(questions);
    let entity = fetch('http://swapi.co/api/films/1').then(response => {
      response.json().then(json => {
        console.log('json', json);
      });
    });;
  },
  determineOutcome: (question, answer) => {
  },
};

export default QuestionUtils;
