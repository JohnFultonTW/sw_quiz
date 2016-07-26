let questions = [
  {
    entityType: 'people',
    text: entity => 'What is ' + entity.name + '\'s hair colour?',
    answer: entity => entity.hair_color
  }, {
    entityType: 'films',
    text: entity => 'What was the release date of ' + entity.title + '?',
    answer: entity => entity.release_date.substring(0,4)
  }, {
    entityType: 'starships',
    text: entity => 'How many films was the ship \'' + entity.name + '\' featured in?',
    answer: entity => entity.films.length.toString()
  }
];
export default questions;
