import * as React from 'react';

interface IProps {
  name: string;
  score?: number;
}

const Hello = ({ name, score }: IProps) => {
  return (
    <>
      <h1>Hello {name} ! </h1>
      {score ? <h2>score: {score}</h2> : null}
    </>
  );
};

export default Hello;
