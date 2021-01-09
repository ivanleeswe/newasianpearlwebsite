import React, { Component, useRef } from 'react'
import mainPic from './photos/main.jpeg';
import './Header.css';
import Menu from './Menu';
import {Link} from 'react-scroll';

const Header = () => {

  return (
    <div className="headerBackground">
      <div className="allWrapper">
        <img src={mainPic} alt='main pic' width='600px' height='600px'className="image"/>
        <div className="textButtonWrapper">
          <div className="text">New Asian Pearl Peninsula</div> 
          <Link className="button" to='menu' smooth={true} duration={1000}>See Menu</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;