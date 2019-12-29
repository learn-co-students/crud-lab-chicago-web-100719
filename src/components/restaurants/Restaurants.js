import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  listRestaurants() {
    return this.props.restaurants.map(restaurant => {return <Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>})
  }
  render() {
    return(
      <ul>
        {this.listRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;