import * as React from 'react';

export interface IPlayer {
  name: string;
  score?: number;
}

export interface IProps {
  handleSubmit?: () => void;
}

class PlayerForm extends React.Component<IProps, IPlayer> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'ASH',
      score: 420,
    };
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value } as any);
  };

  public submit = (e: any) => {
    e.preventDefault();

    console.log(this.state);
  };

  public render() {
    const { name, score } = this.state;
    return (
      <>
        <form onSubmit={this.submit}>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <input
            type='number'
            name='score'
            value={score}
            onChange={this.handleChange}
          />
          <input type='submit' value='Submit' />
        </form>
      </>
    );
  }
}

export default PlayerForm;
