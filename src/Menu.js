import React, { Component } from 'react';
import Menu1 from './photos/menu1.png';
import Menu2 from './photos/menu2.jpg';
import "./Menu.css"

export default class Menu extends Component {
  render() {
    return (
      <div className="menuWrapper">
        <img src={Menu1} width='100%' height='auto'/>
        <img src={Menu2} width='100%' height='auto'/>
      </div>
    )
  }
}
