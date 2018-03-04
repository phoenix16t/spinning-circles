import React from 'react';
import './style.scss';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false });
  };

  togglePulldown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const cls = ['menu'];
    this.state.isOpen ? cls.push('open') : cls.push('close');

    return (
      <div className={ cls.join(' ') }>
        <ul>
          <li>Control 1</li>
          <li>Control 2</li>
          <li>Bigger Bigger Bigger Control 3</li>
          <li>Control 4</li>
          <hr />
          <li onClick={ this.togglePulldown }>
            Menu <span className="arrow" />
          </li>
        </ul>
      </div>
    );
  };
};
