import React, { Component } from 'react'
import Retaurant1 from './photos/Restaurant1.jpeg';
import Retaurant2 from './photos/Restaurant2.jpeg';
import Retaurant3 from './photos/Restaurant3.jpeg';
import Retaurant4 from './photos/Restaurant4.jpeg';
import Retaurant5 from './photos/Restaurant5.jpeg';


export default class PhotoStrip extends Component {
  render() {
    return (
      <div className="restaurantPhotos">
        <img src={Retaurant1} alt='restaurant1' className="restaurantImage"/>
        <img src={Retaurant2} alt='restaurant2' className="restaurantImage"/>
        <img src={Retaurant3} alt='restaurant3' className="restaurantImage"/>
        <img src={Retaurant4} alt='restaurant4' className="restaurantImage"/>
        <img src={Retaurant5} alt='restaurant5' className="restaurantImage"/>
      </div>
    )
  }
}
