import React from 'react';
import { connect } from 'react-redux';
import { EmailWrapper } from '../../components/email-wrapper';
import Header from '../../components/header/header';
import { fetchEmail, viewEmailBody } from '../../actions/email';
import { getDates } from '../../actions/dates';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import icon_calendar from '../../static/svg/icon_calender.svg';
import icon_search from '../../static/svg/icon_search.svg';
import './index.css';

class Email extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchEmail());
  }

  handleEmailClick = (emailId) => {
    const { email: { emailData } } = this.props;
    this.props.dispatch(viewEmailBody(emailData, emailId));
  }

  handleChosenDates = (onApply, picker) => {
    console.log(picker.startDate, picker.endDate);
    this.props.dispatch(getDates(picker.startDate, picker.endDate));
    this.props.dispatch(fetchEmail());
    console.log('Within Check!!!!', this.email.emailData.date);
    }

  render() {
    const { isMobile, email } = this.props;

    const datePickerInput = (
      <div className= { this.props.ismobile ? 'mobileOuterCalendar' : 'desktopOuterCalendar'}>
        <div className='innerCalendar'>
          <DateRangePicker onApply={this.handleChosenDates} startDate="1/1/2019" endDate="1/7/2019">
              <button>
                <img src={icon_calendar} height='20px' width='20px' alt='calendar'/>
              </button>
          </DateRangePicker>
          <div className='dateRangeInput'>Hello</div>
        </div>
        <div className='searchIcon'>
          <img src={icon_search} height='20px' width='20px' alt='search'/>
        </div>
      </div>
    );

    return (
      <div>
        {datePickerInput}
        <Header/>
        {email.emailData.length > 0 && (
          <EmailWrapper
            isMobile={isMobile}
            dataSource={email.emailData}
            onEmailClick={this.handleEmailClick}
          />
        )}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    email: state.email,
    dates: state.dates
  }
}

export default connect(mapStateToProps, null)(Email);