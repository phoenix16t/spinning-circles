import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import Slider from '../slider';

class Menu extends React.Component {
  render() {
    const cls = ['menu'];
    this.props.isOpen ? cls.push('open') : cls.push('close');

    return (
      <div className={ cls.join(' ') }>
        <ul>
          <li>
            <label>Padding Bottom - { this.props.paddingBottom }px </label>
            <Slider
              name='paddingBottom'
              value={ this.props.paddingBottom }
            />
          </li>
          <li>
            <label>Padding Top - { this.props.paddingTop }px </label>
            <Slider
              name='paddingTop'
              value={ this.props.paddingTop }
            />
          </li>

          <hr />

          <li onClick={ this.props.toggleMenu }>
            Menu <span className="arrow" />
          </li>
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    isOpen: state.menu.isOpen,
    paddingBottom: state.circles.paddingBottom,
    paddingTop: state.circles.paddingTop
  };
};

const mapDispatchToProps = {
  toggleMenu: actions.menu.toggleMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
