import test from 'ava';
import React from 'react';
import Answer from './answer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

let component;
let answerSpy;
let input;
let button;

test.beforeEach(() => {
  answerSpy = sinon.spy();
  component = shallow(<Answer onAnswer={answerSpy} />);
  update();
});

let update = () => {
  component.update();
  input = component.find('input');
  button = component.find('button');
};

test('renders an input box to allow user to type answer', t => {
  t.is(component.find('input').length, 1);
});

test('renders button to allow user to confirm answer', t => {
  t.is(component.find('button').length, 1);
});

test('triggers \'onAnswer\' with users answer when button clicked', t => {
  input.prop('onChange')({ target: { value: 'myanswer' } });
  button.prop('onClick')();
  t.true(answerSpy.calledWith('myanswer'));
});

test('updates value of input as user types', t => {
  input.prop('onChange')({ target: { value: 'newvalue' } });
  update();
  t.is(input.prop('value'), 'newvalue');
});
