import test from 'ava';
import React from 'react';
import Quiz from './quiz';
import Ask from './ask';
import Answer from './answer';
import Result from './result';
import QuestionUtils from '../utils/questionUtils';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import _ from 'lodash';

let component;
let askComponent;
let answerComponent;
let resultComponent;
let questionPromise;
let clock;

const question = {
  entityType: 'people',
  text: entity => 'text of the question for ' + entity.name,
  answer: entity => entity.name,
  entity: { name: 'jeff' }
};

let update = () => {
  component.update();
  askComponent = component.find(Ask);
  answerComponent = component.find(Answer);
  resultComponent = component.find(Result);
};

let willReturnQuestion = question => {
  questionPromise = new Promise( resolve => resolve(question));
  getQuestionStub.returns(questionPromise);
}

let answersWith = answer => {
  answerComponent.prop('onAnswer')(answer);
  update();
};

let getQuestionStub;

test.before(() => {
  clock = sinon.useFakeTimers();
  getQuestionStub = sinon.stub(QuestionUtils, 'getRandomQuestion');
  willReturnQuestion(question);
});

test.beforeEach(async () => {
  component = shallow(<Quiz />);
  await questionPromise;
  update();
});

test('render ask component first', t => {
  t.is(askComponent.type(), Ask);
});

test('renders answer component under ask', t => {
  t.is(answerComponent.type(), Answer);
});

test('renders result component at the bottom', t => {
  t.is(resultComponent.type(), Result);
});

test('retrieves question and passes question text into ask component', t => {
  update();
  t.is(askComponent.prop('question'), question.text(question.entity));
});

test('hides the result component initially', t => {
  t.is(resultComponent.prop('show'), false);
});

test('shows result component after answer is provided', t => {
   answersWith('anything');
  t.is(resultComponent.prop('show'), true);
});

test('if answer is correct, passes true to results correct property', t => {
   answersWith('jeff');
  t.is(resultComponent.prop('correct'), true);
});

test('if answer is incorrect, passes false to results correct property', t => {
   answersWith('notJeff');
  t.is(resultComponent.prop('correct'), false);
});

test.only('after user answers, wait 5 seconds and generate a new question', async t => {
  let newQuestion = _.assign(_.cloneDeep(question), {entity: {name: 'Jim'}});
  willReturnQuestion(newQuestion);

  answersWith('someAnswer');
  clock.tick(4900);
  await questionPromise;
  update();
  t.is(resultComponent.prop('show'), true);
  clock.tick(5001);
  await questionPromise;
  update();

  t.is(askComponent.prop('question'), newQuestion.text(newQuestion.entity));
  t.is(resultComponent.prop('show'), false);
});

