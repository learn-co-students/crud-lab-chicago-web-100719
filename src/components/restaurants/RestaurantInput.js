import React, { Component } from 'react';

class RestaurantInput extends Component {

  state= {
    text: ''
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} >
        <input type="text" name="name" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
        <input type="submit" />
      </form>
    );
  }
};

export default RestaurantInput;
