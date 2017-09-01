// author: mic
import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div>
        <h4>{ this.props.title }</h4>
        <p>{ this.props.text }</p>
      </div>
    );
  }
}

class ContactText extends Component {
  render() {
    return (
      <div>
        <Container title="Better yet, see us in person!" text="We love our customers, so feel free to visit during normal business hours." />
        <Container title="Leander Laundry & Car Wash" text="105 Sonny Dr, Leander, Texas 78641" />
        <Container title="Hours" text="5am to Midnight Every Day of the Week 365 Days a Year" /> 
      </div>
    );
  }
}

export default ContactText;
