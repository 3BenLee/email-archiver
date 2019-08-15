import React from 'react';
import PropTypes from 'prop-types';
import icon_mail_sp from '../../static/svg/icon_mail_sp.svg';
import Badge from 'react-bootstrap/Badge';

export function EmailItemMobile(props) {
  const { sender, receiver, remaining_email, subject, date, body, is_expanded, onClick } = props;

  return (
    <div>
      <img src={icon_mail_sp} height='20px' width='20px' alt='email' />
      <h5>{sender}</h5>
      <h5>{receiver}</h5>
      {remaining_email > 0 &&
              <>
                ...
                <h6><Badge variant="secondary">+{remaining_email}</Badge></h6>
              </>
            }
      <h5>{subject}</h5>
      {is_expanded && <div>{body}</div>}
    </div>
  );
}

EmailItemMobile.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  receiver: PropTypes.array,
  remainingEmail: PropTypes.number,
  subject: PropTypes.string,
  date: PropTypes.string,
  is_expanded: PropTypes.bool,
};
