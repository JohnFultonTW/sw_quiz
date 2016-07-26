import test from 'ava';
import React from 'react';
import Answer from './answer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

let component;
let answerSpy;

test.beforeEach(() => {
  answerSpy = sinon.spy();
  component = shallow(<Answer onAnswer={answerSpy} />);
});

test('renders an input box to allow user to type answer', t => {
  let input = component.find('input');
  t.is(input.length, 1);
});
