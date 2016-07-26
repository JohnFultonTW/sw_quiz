import React from 'react';
import Header from './views/header';
import Quiz from './views/quiz';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className="mdl-base mdl-layout__container"><Header /><Quiz /></div>);
  }
}

export default App;
