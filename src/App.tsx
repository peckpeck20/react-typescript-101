import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import Joke from './components/Joke';

export interface IState {
  joke?: IJoke;
}

export interface IJoke {
  type: string;
  value: {
    categories: string[];
    id: number;
    joke: string;
  };
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      joke: {
        type: '',
        value: {
          categories: [],
          id: 0,
          joke: '',
        },
      },
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
    return (
      <div className='App'>
        <Joke joke={joke} />
        <Hello name='Jose' score={12} />
        <Hello name='Ted' />
      </div>
    );
  }
}

export default App;
