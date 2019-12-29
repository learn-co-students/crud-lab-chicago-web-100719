import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const  restaurant  = this.props.restaurant;

    return (
        <li>
          {restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
    );
  }
};

export default Restaurant;
