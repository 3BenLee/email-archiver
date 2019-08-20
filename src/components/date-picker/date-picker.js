import React from 'react';
import { connect } from 'react-redux';
import { getDates } from '../../actions/dates';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import icon_calendar from '../../static/svg/icon_calender.svg';
import icon_search from '../../static/svg/icon_search.svg';
import './date-picker.css';

class DatePicker extends React.Component {

  handleChosenDates = (onApply, picker) => {
    console.log(picker.startDate, picker.endDate);
    this.props.dispatch(getDates(picker.startDate, picker.endDate))
  }
  render () {

    const { dates } = this.props;
    return (
      <div className='outerCalendarContainer'>
        <div className='innerCalendarContainer'>
          <DateRangePicker onApply={this.handleChosenDates} startDate="1/1/2019" endDate="1/7/2019">
              <button>
                <img src={icon_calendar} height='20px' width='20px' alt='calendar'/>
              </button>
          </DateRangePicker>
          <div className='dateRangeInput'>{dates.endDate}</div>
        </div>
        <div className='searchIcon'>
          <img src={icon_search} height='20px' width='20px' alt='search'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dates: state.dates
  }
}

export default connect(mapStateToProps, null)(DatePicker)
