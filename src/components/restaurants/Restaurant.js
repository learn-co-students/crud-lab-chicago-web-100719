import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  render() {
    return (
      <div>
        <li>
        {this.props.restaurant.text}
        <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}> X </button>
        <ReviewsContainer restaurantId={this.props.restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
