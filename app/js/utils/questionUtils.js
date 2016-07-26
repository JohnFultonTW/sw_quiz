import _ from 'lodash';
import questions from './questions';

const ENTITY_IDS = {
  films: _.range(1,7),
  people: _.range(1,87),
  starships: [2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40, 41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66, 68, 74, 75],
  vehicles: _.range(1,39),
  species: _.range(1,37),
  planets: _.range(1, 61)
};

let QuestionUtils = {
  getRandomQuestion: () => {
    let question = _.sample(questions);
    let entityId = _.sample(ENTITY_IDS[question.entityType]);
    return fetch('http://swapi.co/api/' + question.entityType +'/' + entityId).then(response => {
      return response.json().then(json => {
        return json;
      });
    }).then(entity => {
      question.entity = entity;
      return question; 
    });
  },
};

export default QuestionUtils;
