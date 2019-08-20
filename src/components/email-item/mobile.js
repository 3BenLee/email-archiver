import React from 'react';
import PropTypes from 'prop-types';
import icon_mail_sp from '../../static/svg/icon_mail_sp.svg';
import icon_arrow02 from '../../static/svg/icon_arrow02.svg';
import Badge from 'react-bootstrap/Badge';
import icon_clip from '../../static/svg/icon_clip.svg';
import moment from 'moment';
import './mobile.css';

export function EmailItemMobile(props) {
  const { sender, receiver, remaining_email, subject, attachment, date, body, is_expanded, onClick } = props;

  const emailReceiver = remaining_email ? `${receiver[0]}, ...` : receiver[0];

  const extraReceivers = (
    <div className='extraReceivers'>
      {remaining_email > 0 &&
        <h6>
          <Badge variant='secondary'>+{remaining_email}</Badge>
        </h6>}
    </div>
  );

  const emailAttachment = attachment && (
    <div className='mobileEmailAttachment'>
      <img src={icon_clip} height='15px' width='15px' alt='clip' />
    </div>
  );

  const emailDate = (date) => {
    let day;
    if(moment(date).format('YYYY MM DD') === moment().format('YYYY MM DD')) {
      day = moment(date).startOf().fromNow()
    }
    else if(moment(date).format('YYYY') === moment().format('YYYY')) {
      day = moment(date).format('MMM DD')
    } else {
      day = moment(date).format('MMM DD YYYY');
    }
    return day;
  }

  const emailBody = is_expanded && (
    <p className='mobileBody'>
      {body}
    </p>
  );

  return (
    <>
      <div className='emailItemMobileContainer' onClick={onClick}>
        <div className='emailTopRow'>
          <img className='mobileMailIcon' src={icon_mail_sp} height='30px' width='30px' alt='email' />
          <div className='senderAndReceiver'>
            <div className='emailSender'>
              {sender}
            </div>
            <div className='emailReceiver'>
              {emailReceiver}
            </div>
          </div>
            <div className='dateArrow'>
              {emailAttachment}
              <div className='mobileDate'>{emailDate(date)}</div>
              <img src={icon_arrow02} height='6px' width='6px' alt='email' />
              {extraReceivers}
            </div>
          </div>
        </div>
      <div className='mobileSubject'>{subject}</div>
      {emailBody}
      <hr/>
    </>
  );
}

EmailItemMobile.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  receiver: PropTypes.array,
  remaining_email: PropTypes.number,
  subject: PropTypes.string,
  date: PropTypes.string,
  is_expanded: PropTypes.bool,
};
