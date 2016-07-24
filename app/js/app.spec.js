import test from 'ava';
import React from 'react';
import App from './app';
import Header from './views/header';
import Quiz from './views/quiz';
import { shallow } from 'enzyme';

let component;

test.beforeEach(() => {
  component = shallow(<App />);
});

test('wraps children in plain div element', t => {
  t.is(component.type(), 'div');
});

test('renders header first', t => {
  t.is(component.childAt(0).type(), Header);
});

test('renders quiz component under header', t => {
  t.is(component.childAt(1).type(), Quiz);
});
