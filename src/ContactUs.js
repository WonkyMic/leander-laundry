// author: mic
import React, { Component } from 'react';
import ContactForm from './ContactForm.js';
import ContactText from './ContactText.js';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <ContactForm />
        <ContactText />
      </div>
    );
  }
}

export default ContactUs;
