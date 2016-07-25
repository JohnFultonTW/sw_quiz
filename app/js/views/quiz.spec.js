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
const answer = '42';

const question = {
  entityType: 'people',
};

const outcome = {correct: true};

let update = () => {
  component.update();
  askComponent = component.childAt(0);
  answerComponent = component.childAt(1);
  resultComponent = component.childAt(2);
};

test.before(() => {
  let textStub = sinon.stub(QuestionUtils, 'questionText');
  textStub.returns('question was not passed in');
  textStub.withArgs(question).returns('the question text');

  sinon.stub(QuestionUtils, 'getRandomQuestion').returns(question);

  let outcomeStub = sinon.stub(QuestionUtils, 'determineOutcome');
  outcomeStub.returns('question and/or answere not passed in');
  outcomeStub.withArgs(question, answer).returns(outcome);
});

test.beforeEach(() => {
  component = shallow(<Quiz />);
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
  t.is(askComponent.prop('question'), QuestionUtils.questionText(question));
});

test('hides the result component initially', t => {
  t.is(resultComponent.prop('show'), false);
});

test('shows result component after answer is provided', t => {
  answerComponent.prop('onAnswer')();
  update();
  t.is(resultComponent.prop('show'), true);
});

test('passes the outcome down to the result component', t => {
  answerComponent.prop('onAnswer')(answer);
  update();
  t.is(resultComponent.prop('outcome'), outcome);
});
