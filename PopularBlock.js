import React from 'react';
import "./Popular.css"
import PopularItemsList from './PopularItemsList'

const PopularBlock = (props) => {
    return (
      <div>
        <div className="headerDescriptionWrapper">
          <div className="header">Most Popular Dishes</div>
          <div className="description">Traditional and Delicious</div>
        </div>
        <div className="popularItems">
          <PopularItemsList popularItems={props.popularItems}/>
        </div>
      </div>
    )
}

export default PopularBlock;
