import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: name => dispatch({type: 'ADD_RESTAURANT', name: name}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id})
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
