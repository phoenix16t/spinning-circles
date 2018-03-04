import React from 'react';
import Circles from '../circles';
import Menu from '../menu';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      paddingBottom: 0,
      paddingTop: 1
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="circle-app">
        <Circles
          paddingBottom={ this.state.paddingBottom }
          paddingTop={ this.state.paddingTop }
        />
        <Menu
          handleChange={ this.handleChange }
          paddingBottom={ this.state.paddingBottom }
          paddingTop={ this.state.paddingTop }
        />
      </div>
    );
  };
};
