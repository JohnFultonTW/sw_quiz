import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import QuestionUtils from './questionUtils';
import questions from './questions';


const question = {
  entityType: 'planets',
  text: entity => 'What year was the movie ' + entity.title + ' released?',
  answer: entity => entity.release_date
};

const entity = {
  title: 'A New Hope',
  release_date: '1977-05-25'
};

test.before(() => {
  let sampleStub = sinon.stub(_, 'sample');
  sampleStub.returns('questions not passed as arg to sample');
  sampleStub.withArgs(questions).returns(question);
});

test('returns a random question from questions list, populated with entity from api', t => {
  let randomQuestion = QuestionUtils.getRandomQuestion();
  fetchMock.mock('http://swapi.co/api/films/1', 200, entity);
  t.is(randomQuestion.entity, entity);
});


