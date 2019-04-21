import * as React from 'react';

interface IProps {
  joke: object;
}

const Joke = ({ joke }: IProps) => {
  console.log(joke);
  return (
    <>
      <h1>JOKE</h1>
    </>
  );
};

export default Joke;
