import React from 'react';
import SignedIn from './signedIn';
import SignedOut from './signedOut';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedIn /> : <SignedOut />;
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='continer'>
        <Link to='/' className='brand-logo'>
          YOUR PLAN
        </Link>
      </div>
      {links}
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);
