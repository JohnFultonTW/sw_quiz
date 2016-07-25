import test from 'ava';
import _ from 'lodash';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import QuestionUtils from './questionUtils';
import questions from './questions';
import random from 'random-js';

const filmQuestion = {
  entityType: 'films',
};

const filmEntity = {
  title: 'A New Hope',
  release_date: '1977-05-25'
};

const peopleQuestion = {
  entityType: 'people'
};

const peopleEntity = {
  hair_color: 'pink'
};

let sampleStub;
let randomStub;

test.before(() => {
  sampleStub = sinon.stub(_, 'sample');
  sampleStub.returns('questions not passed as arg to sample');

  randomStub = sinon.stub(random, 'integer');
  randomStub.returns('correct arguments not passed to random.integer');

  global.fetch = fetchMock.fetchMock;
});

test('returns a random question from questions list, populated with film entity from api',  async t => {
  randomStub.withArgs(1, 7).returns(3);
  fetchMock.mock('http://swapi.co/api/films/3', filmEntity);
  sampleStub.withArgs(questions).returns(filmQuestion);
  let question = await QuestionUtils.getRandomQuestion();
  t.deepEqual(question, filmQuestion);
  t.deepEqual(question.entity, filmEntity);
});

test('returns a random question from questions list, populated with character entity from api',  async t => {
  randomStub.withArgs(1, 87).returns(33);
  fetchMock.mock('http://swapi.co/api/people/33', peopleEntity);
  sampleStub.withArgs(questions).returns(peopleQuestion);
  let question = await QuestionUtils.getRandomQuestion();
  t.deepEqual(question, peopleQuestion);
  t.deepEqual(question.entity, peopleEntity);
});

