import React from 'react';
import { connect } from 'react-redux';
import { fetchEmailByStartEndDate, viewEmailBody, storeDate } from '../../actions/email';
import { EmailWrapper } from '../../components/email-wrapper';
import logo from '../../static/png/logo.png';
import Header from '../../components/header/header';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import icon_calendar from '../../static/svg/icon_calender.svg';
import icon_search from '../../static/svg/icon_search.svg';
import './index.css';

class Email extends React.Component {

  handleEmailClick = (emailId) => {
    const { email: { emailData } } = this.props;
    this.props.dispatch(viewEmailBody(emailData, emailId));
  }

  handleChosenDates = (onApply, picker) => {
    const { startDate, endDate } = picker;
    this.props.dispatch(fetchEmailByStartEndDate({ startDate, endDate }));
    this.props.dispatch(storeDate({ startDate, endDate }))
  }

  render() {
    const { isMobile, email: { emailData, dates } } = this.props;
    const start = moment(dates.startDate).format('L');
    const end = moment(dates.endDate).format('L');

    const datePickerInput = (
      <div className= { this.props.ismobile ? 'mobileOuterCalendar' : 'desktopOuterCalendar'}>
        <div className='innerCalendar'>
          <DateRangePicker onApply={this.handleChosenDates} startDate="1/1/2019" endDate="1/7/2019">
            <button>
              <img src={icon_calendar} height='23px' width='23px' alt='calendar'/>
            </button>
          </DateRangePicker>
          <div className='dateRangeInput'>{`${start} - ${end}`}</div>
        </div>
        <div className='searchIcon'>
          <img src={icon_search} height='20px' width='20px' alt='search'/>
        </div>
      </div>
    );

    const placeholder = (
      <div className={isMobile ? 'placeholderMobile' : 'placeholderDesktop'}>
        <img src={logo} alt='archiver logo' />
      </div>
    );

    const emailWrapper = (
      <EmailWrapper
        isMobile={isMobile}
        dataSource={emailData}
        onEmailClick={this.handleEmailClick}
      />
    );

    return (
      <>
        {datePickerInput}
        <Header/>
        {!emailData.length && !isMobile && <hr/>}
        {!emailData.length ? placeholder : emailWrapper}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    dates: state.dates
  }
}

export default connect(mapStateToProps, null)(Email);