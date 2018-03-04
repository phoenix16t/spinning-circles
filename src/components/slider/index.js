import React from 'react';

export default class Slider extends React.Component {
  render() {
    return (
      <input 
        className="slider"
        name={ this.props.name }
        onChange={ this.props.handleChange }
        type="range"
        value={ this.props.value } />
    );
  };
};
