import React, { Component, useRef } from 'react'
import mainPic from './photos/main.jpeg';
import './App.css';
import {Link} from 'react-scroll';

const TopBlock = () => {

  return (
    <div className="topBlock">
      <div className="imageContainer">
        <img src={mainPic} alt='main pic' className="image"/>
      </div>
      <div className="titleButtonContainer">
        <div className="name">New Asian Pearl Peninsula</div> 
        <div className="address">1671 El Camino Real, Millbrae, CA 94030</div>
        <div className="hours">Open daily 10:30 AM - 2:30 PM, 4:00 PM - 8:00 PM</div>
        <Link className="button" to='photoStrip' smooth={true} duration={1000}>See Menu</Link>
      </div>
    </div>
  )
}

export default TopBlock;