import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import { Link, NavLink } from 'react-router-dom';

const SignedIn = (props) => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Project</NavLink>
      </li>
      <li>
        <Link to='/' onClick={props.signOut}>
          Log out
        </Link>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          RM
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(logOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedIn);
