import * as React from 'react';
import { IJoke } from 'src/App';

interface IProps {
  joke?: IJoke;
}

const Joke = ({ joke }: IProps) => {
  console.log(joke);

  if (joke) {
    if (joke.type === 'success') {
      return (
        <>
          <h1>{joke.value.joke}</h1>
          <p>{joke.value.categories[0]}</p>
        </>
      );
    }
  }

  return (
    <>
      <p>no joke found</p>
    </>
  );
};

export default Joke;
