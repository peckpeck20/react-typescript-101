import * as React from 'react';

interface IProps {
  name: string;
}

const Hello = ({ name }: IProps) => {
  return (
    <>
      <h1>Hello {name} ! </h1>
    </>
  );
};

export default Hello;
