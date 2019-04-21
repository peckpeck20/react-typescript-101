import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import Joke from './components/Joke';

export interface IState {
  joke?: any;
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      joke: {},
    };
  }

  public getQuote = async () => {
    await fetch('http://api.icndb.com/jokes/random')
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        this.setState({ joke: result });
      });
  };

  public componentDidMount() {
    this.getQuote();
  }

  public render() {
    const { joke } = this.state;
    // console.log(joke);
    return (
      <div className='App'>
        <Hello name='Jose' score={12} />
        <Hello name='Ted' />
        <Joke joke={joke} />
      </div>
    );
  }
}

export default App;
