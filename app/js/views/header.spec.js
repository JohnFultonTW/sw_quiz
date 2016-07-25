import test from 'ava';
import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

let component;

test.beforeEach(() => {
  component = shallow(<Header />);
});

test('shows star wars title in h3', t => {
  let heading = component.find('h3');
  t.is(heading.text(), 'Star Wars Quiz');
});
