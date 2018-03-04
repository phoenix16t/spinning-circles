import React from 'react';
import Slider from '../slider';
import './style.scss';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const cls = ['menu'];
    this.state.isOpen ? cls.push('open') : cls.push('close');

    return (
      <div className={ cls.join(' ') }>
        <ul>
          <li>
            <label>Padding Bottom - { this.props.paddingBottom }px </label>
            <Slider
              handleChange={ this.props.handleChange }
              name='paddingBottom'
              value={ this.props.paddingBottom }
            />
          </li>
          <li>
            <label>Padding Top - { this.props.paddingTop }px </label>
            <Slider
              handleChange={ this.props.handleChange }
              name='paddingTop'
              value={ this.props.paddingTop }
            />
          </li>

          <hr />

          <li onClick={ this.toggleMenu }>
            Menu <span className="arrow" />
          </li>
        </ul>
      </div>
    );
  };
};
