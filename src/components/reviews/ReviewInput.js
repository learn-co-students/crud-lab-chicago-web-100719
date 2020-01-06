import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state ={
      text: ''
    }
  }
  
  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({text: ''});
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
