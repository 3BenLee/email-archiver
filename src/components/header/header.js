import React from 'react';
import { connect } from 'react-redux';
import './header.css';


function Header(props) {

  const emailCount = (
    <div className='emailCount'>
      {props.email.emailData.length}
    </div>
  );

  return (
    <>
      <div className='headerResults'><strong>Results: {emailCount} mail(s)</strong></div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.email
  }
}

export default connect(mapStateToProps, null)(Header);
