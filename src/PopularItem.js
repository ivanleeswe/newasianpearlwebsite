import React from 'react';
import './Popular.css';

const PopularItem = (props) => {
  return (
    <div className="itemWrapper">
      <div className="textWrapper">
        <div className="name">{props.item.name}</div>
        <div className="price">5.00</div>
      </div>
      <img src={props.item.photo} alt='foodItems' width='140px' height='140px'/>
    </div>
  )
}

export default PopularItem;
