import React from 'react';
import PropTypes from 'prop-types';
import icon_mail_sp from '../../static/svg/icon_mail_sp.svg';
import icon_arrow02 from '../../static/svg/icon_arrow02.svg';
import Badge from 'react-bootstrap/Badge';
import './mobile.css';

export function EmailItemMobile(props) {
  const { sender, receiver, remaining_email, subject, date, body, is_expanded, onClick } = props;

  const emailReceiver = remaining_email ? `${receiver}, ...` : receiver;

  const extraReceivers = (
    <div className='extraReceivers'>
      {remaining_email > 0 &&
        <h6>
          <Badge variant='secondary'>+{remaining_email}</Badge>
        </h6>}
    </div>
  );

  const emailBody = is_expanded && (
    <p>
      {body}
    </p>
  );

  return (
    <>
      <div onClick={onClick}>
        <div className='emailTopRow'>
          <img className='mobileMailIcon' src={icon_mail_sp} height='30px' width='30px' alt='email' />
          <div className='senderReceiver'>
            <div className='emailSender'>
              {sender}
            </div>
            <div className='emailReceiver'>
              {emailReceiver}
            </div>
          </div>
          <div className='dateArrow'>
            <div className='mobileDate' >{date}</div>
            <img src={icon_arrow02} height='6px' width='6px' alt='email' />
            {extraReceivers}
          </div>
        </div>
      </div>
      <div className='mobileSubject'>{subject}</div>
      {emailBody}
      <hr size='30'/>
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
