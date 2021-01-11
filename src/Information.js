import React from 'react';
import './App.css'

const Information = () => {
  return (
    <div id='textBlock'>
      <div className="welcome">
        Welcome! Thank you for visiting and your continuous patronage. 
      </div>
      <div>
        Place an order today by calling&nbsp;<a href="tel:6506168288" style={{color: 'red', textDecoration: 'none'}}>(650) 616-8288</a>.
      </div>
    </div>
  );
}

export default Information;
