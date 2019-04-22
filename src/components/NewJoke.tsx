import * as React from 'react';

interface IProps {
  handlePress: () => void;
}

const NewJoke = (props: IProps) => {
  return (
    <div>
      <button onClick={props.handlePress}>New Joke</button>
    </div>
  );
};

export default NewJoke;
