import React, { Component } from 'react';

class Form3 extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      email: '',
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <label>Email</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form3;