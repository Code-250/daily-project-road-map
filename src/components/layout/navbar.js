import React from 'react';
import SignedIn from './signedIn';
import SignedOut from './signedOut';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = () => (
  <nav className='nav-wrapper grey darken-3'>
    <div className='continer'>
      <Link to='/' className='brand-logo'>
        YOUR PLAN
      </Link>
    </div>
    <SignedIn />
    <SignedOut />
  </nav>
);

const mapStateToProps = (state) => {
  console.log(state);
  return process;
};
export default connect(mapStateToProps)(Navbar);
