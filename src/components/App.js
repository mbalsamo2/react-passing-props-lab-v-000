import React from 'react';
import ReactDOM from 'react-dom';
import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }

  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;
