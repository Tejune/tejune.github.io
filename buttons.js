'use strict';

const e = React.createElement;

class FirstButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You crushed him. You fucking crushed him. You are a monster.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Hug him'
    );
  }
}

class SecondButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You destroyed the fabric of spacetime';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Do a Backflip'
    );
  }
}

const domContainer = document.querySelector('#first_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FirstButton));

const second_domContainer = document.querySelector('#second_button_container');
const second_root = ReactDOM.createRoot(second_domContainer);
second_root.render(e(SecondButton));