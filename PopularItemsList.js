import React from 'react'
import PopularItem from './PopularItem'

const PopularItemsList = (props) => {
  return(
    <div className="listWrapper">
      {props.popularItems.map(item => 
      <PopularItem item={item} key={item.id}/>)}
    </div>
  )
}


export default PopularItemsList;