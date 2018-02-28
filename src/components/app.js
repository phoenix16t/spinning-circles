import React from 'react';

const NUM_SPINNERS = 100;

export default class App extends React.Component {
  renderCircles = (count) => {
    const margin = -count * 2;
    const circles = count > 0 ? this.renderCircles(count - 1) : '';
    const styles = count === NUM_SPINNERS ? { marginTop: margin } : {};

    return <div className="circle" style={ styles }>{ circles }</div>;
  };

  render = () => {
    return (
      <div className="circle-app">
        { this.renderCircles(NUM_SPINNERS) }
      </div>
    );
  };
};
