import test from 'ava';
import questions from './questions';

test('persons hair colour', t => {
  let question = questions[0];
  t.is(question.entityType, 'people');
  t.is(question.text({name: 'Obi Wan'}), 'What is Obi Wan\'s hair colour?');
  t.is(question.answer({hair_color: 'brown'}), 'brown');
});

test('films release year', t => {
  let question = questions[1];
  t.is(question.entityType, 'films');
  t.is(question.text({title: 'A New Hope'}), 'What was the release date of A New Hope?');
  t.is(question.answer({release_date: '1977-05-25'}), '1977');
});

test('how many films was a particular ship featured in', t => {
  let question = questions[2];
  t.is(question.entityType, 'starships');
  t.is(question.text({name: 'Slave 1'}), 'How many films was the ship \'Slave 1\' featured in?');
  t.is(question.answer({films: [1,2]}), '2');
});
