import '../assets/css/App.css';
import React, { Component } from 'react';

class BasicRequestForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    this.props.makeRequest(this.refs.message.value);

  }

  render() {
    return (
      <div>
        <h1>Animated Codes Made Easy Client</h1>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <label>Message to encode: </label> <input type="text" ref="message" />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default BasicRequestForm;
