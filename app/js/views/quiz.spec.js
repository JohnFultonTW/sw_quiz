import test from 'ava';
import React from 'react';
import Quiz from './quiz';
import Ask from './ask';
import Answer from './answer';
import Result from './result';
import QuestionUtils from '../utils/questionUtils';
import sinon from 'sinon';
import { shallow } from 'enzyme';

let component;
let askComponent;
let answerComponent;
let resultComponent;
let questionPromise;

const question = {
  entityType: 'people',
  text: entity => 'text of the question for ' + entity.name,
  answer: entity => entity.name,
  entity: { name: 'jeff' }
};

let update = () => {
  component.update();
  askComponent = component.childAt(0);
  answerComponent = component.childAt(1);
  resultComponent = component.childAt(2);
};

test.before(() => {
  questionPromise = new Promise( resolve => resolve(question));
  sinon.stub(QuestionUtils, 'getRandomQuestion').returns(questionPromise);
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

test('retrieves question and passes question text into ask component', async t => {
  update();
  t.is(askComponent.prop('question'), question.text(question.entity));
});

test('hides the result component initially', t => {
  t.is(resultComponent.prop('show'), false);
});

test('shows result component after answer is provided', t => {
  answerComponent.prop('onAnswer')();
  update();
  t.is(resultComponent.prop('show'), true);
});

test('if answer is correct, passes true to results correct property', t => {
  answerComponent.prop('onAnswer')('jeff');
  update();
  t.is(resultComponent.prop('correct'), true);
});

test('if answer is incorrect, passes false to results correct property', t => {
  answerComponent.prop('onAnswer')('notjeff');
  update();
  t.is(resultComponent.prop('correct'), false);
});
