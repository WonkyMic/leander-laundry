// author: mic
import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'default-name',
      nmail: 'default-email',
      message: 'default-text'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ' with email: ' + this.state.email + ' saying... ' + this.state.text);
    event.preventDefault();
  }

  render() {
    return (
      <div className="ContactUs">
        <h2>Contact Us</h2>
        <div>
          <h4>Drop us a line!</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
            </div>
            <div>
              <input type="text" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Email" />
            </div>
            <div>
              <textarea name="text" value={this.state.value} onChange={this.handleChange} placeholder="Message"/>
            </div>
            <div>
              <input type="submit" value="SEND" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
