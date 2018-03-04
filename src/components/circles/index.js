import React from 'react';
import * as constants from '../../constants';
import './style.scss';

export default class Circles extends React.Component {
  renderCircles = (count) => {
    const circles = count > 0 ? this.renderCircles(count - 1) : '';
    const styles = count === constants.numSpinners ? { marginTop: -(count * 2) } : {};

    return (
      <div className="circle" style={ styles }>
        { circles }
      </div>
    );
  };

  render() {
    return this.renderCircles(constants.numSpinners);
  };
};
