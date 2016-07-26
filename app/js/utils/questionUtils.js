import _ from 'lodash';
import questions from './questions';
import random from 'random-js';

const ENTITY_COUNT = {
  films: 7,
  people: 87,
  starships: 37,
  vehicles: 39,
  species: 37,
  planets: 61
};

let QuestionUtils = {
  getRandomQuestion: () => {
    let question = _.sample(questions);
    let entityId = random.integer(1, ENTITY_COUNT[question.entityType]);

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
