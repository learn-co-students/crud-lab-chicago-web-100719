import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const selectedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {selectedReviews.map(review => {
          return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;