import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  listReviews() {
   return this.props.reviews.map(review => review.restaurantId === this.props.restaurantId ? <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/> : null)
  }
  render() {
    
    return (
      <ul>
        {this.listReviews()}
      </ul>
    );
  }
};

export default Reviews;