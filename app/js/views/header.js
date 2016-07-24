import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<header className="mdl-layout__header">
        <div className="mdl-layout__header-row quiz-title-row">
          <span className="mdl-layout__title quiz-title"><h3>Star Wars Quiz</h3></span>
				</div>
			</header>
		</div>
    );
  }
}

export default Header;
