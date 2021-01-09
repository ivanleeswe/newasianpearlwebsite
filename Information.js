import React from 'react';
import './Header.css'

const Information = () => {
  return (
    <div id='menu'>
      <div className="welcome">
        Welcome, thank you for visiting and continuous patronage.
      </div>
      <div className="information">
        Please call&nbsp;<span style={{color: 'red'}}>(650) 616-8288</span> &nbsp;to make your order.
      </div>
      <div className="address">
        1671 El Camino Real, Millbrae, CA 94030
      </div>
      <div className="hours">
        Opens everyday 10:30 AM - 2:30 PM, 4:00 PM - 8:00 PM
      </div>
    </div>
  );
}

export default Information;
