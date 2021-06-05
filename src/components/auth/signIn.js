import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    const { auth, authlink } = this.props;
    if (authlink.uid) return <Redirect to='/' />;
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>SignIn</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
            <div className='center red-text'>{auth ? <p>{auth}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    auth: state.auth.authError,
    authlink: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (Credential) => dispatch(signIn(Credential)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(SignIn);
