import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import icon_clip from '../../static/svg/icon_clip.svg';
import moment from 'moment';
import './desktop.css';

export function EmailItemDesktop(props) {
  const { sender, receiver, remaining_email, subject, attachment, date, body, is_expanded, onClick } = props;

  const emailReceiver = receiver.length > 1 ? `${receiver[0]}, ...` : receiver[0];


  const otherReceivers = remaining_email > 0 && (
    <h6 className='plusBadge'>
      <Badge variant='secondary'>+{remaining_email}</Badge>
    </h6>
  );


  const desktopAttachment = attachment && (
    <div className='desktopEmailAttachment'>
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
    <tr>
      <td colSpan={4}>{body}</td>
    </tr>
  );

  return (
    <>
      <tr className='tableRow' onClick={onClick}>
        <td>{sender}</td>
        <td>{emailReceiver}</td>
        <td>{otherReceivers}</td>
        <td>{subject}</td>
        <td>{desktopAttachment}</td>
        <td className='dateAndAttachment'>
        {emailDate(date)}
        </td>
      </tr>
      {emailBody}
    </>
  );
}

EmailItemDesktop.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  receiver: PropTypes.array,
  remaining_email: PropTypes.number,
  subject: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  is_expanded: PropTypes.bool,
  onClick: PropTypes.func,
};
