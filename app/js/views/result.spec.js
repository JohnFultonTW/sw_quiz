import Result from './result';
import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';

test('sets root div to hidden if show property is false', t => {
  let component = shallow(<Result show={false} correct={true}/>);
  t.true(component.hasClass('hidden'));
});

test('does not set root div to hidden if show property is true', t => {
  let component = shallow(<Result show={true} correct={true}/>);
  t.false(component.hasClass('hidden'));
});

test('when answer is correct, show tick icon', t => {
  let component = shallow(<Result show={true} correct={true} />);
  let iconDiv = component.findWhere(node => node.type() == 'div' && node.hasClass('app__icon'));
  t.is(iconDiv.children().type(), 'i');
  t.true(iconDiv.children().hasClass('material-icons'));
  t.is(iconDiv.children().text(), 'done');
});


test('when answer is incorrect, show cross icon', t => {
  let component = shallow(<Result show={true} correct={false} />);
  let iconDiv = component.findWhere(node => node.type() == 'div' && node.hasClass('app__icon'));
  t.is(iconDiv.children().type(), 'i');
  t.true(iconDiv.children().hasClass('material-icons'));
  t.is(iconDiv.children().text(), 'close');
});
