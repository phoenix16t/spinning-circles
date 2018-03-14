import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class Slider extends React.Component {
  render() {
    return (
      <input 
        className='slider'
        name={ this.props.name }
        onChange={ this.props.handleChange }
        type='range'
        value={ this.props.value } />
    );
  };
};

const mapDispatchToProps = {
  handleChange: actions.circles.handleChange
};

export default connect(
  null,
  mapDispatchToProps
)(Slider);
