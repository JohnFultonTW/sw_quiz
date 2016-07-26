import test from 'ava';
import React from 'react';
import Ask from './ask';
import { shallow } from 'enzyme';

test('passes question property down into div', t => {
  let component = shallow(<Ask question="What is the meaning of life?" />);
  t.is(component.text(), 'What is the meaning of life?');
});


