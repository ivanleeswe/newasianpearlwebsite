import React from 'react';
import './Header.css'

const Information = () => {
  return (
    <div id='menu'>
      <div className="welcome">
        Welcome! Thank you for visiting and your continuous patronage.
      </div>
      <div className="information">
        Place an order today by calling&nbsp;<a href="tel:6506168288" style={{color: 'red', textDecoration: 'none'}}>(650) 616-8288</a>.
      </div>
      <div className="address">
        1671 El Camino Real, Millbrae, CA 94030
      </div>
      <div className="hours">
        Open daily 10:30 AM - 2:30 PM, 4:00 PM - 8:00 PM
      </div>
    </div>
  );
}

export default Information;
