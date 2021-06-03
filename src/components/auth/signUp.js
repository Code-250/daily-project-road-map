import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      fifrstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>SignIn</h5>
          <div className='input-field'>
            <label htmlFor='firstName'>firstName</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='lastName'>lastName</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
