import React from 'react';
import Circles from '../circles';
import Menu from '../menu';

export default class App extends React.Component {
  render() {
    return (
      <div className="circle-app">
        <Circles />
        <Menu />
      </div>
    );
  };
};
