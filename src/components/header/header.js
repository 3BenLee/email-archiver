import React from 'react';
import { connect } from 'react-redux';
import DatePicker from '../../components/date-picker/date-picker';
import './header.css';


function Header(props) {

  const emailCount = (
    <div className='emailCount'>
      {props.email.emailData.length}
    </div>
  );

  return (
    <>
      <DatePicker/>
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
