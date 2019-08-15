import React from 'react';
import PropTypes from 'prop-types';

import Badge from 'react-bootstrap/Badge';

export function EmailItemDesktop(props) {
  const { sender, receiver, remaining_email, subject, date, body, is_expanded, onClick } = props;
  return (
    <>
      <tr onClick={onClick}>
          <td>{sender}</td>
          <td>{receiver[0]}
            {remaining_email > 0 &&
              <>
                ...
                <h6><Badge variant="secondary">+{remaining_email}</Badge></h6>
              </>
            }
          </td>
          <td>{subject}</td>
          <td>{date}</td>
        </tr>
        {is_expanded && <tr>
          <td colSpan={4}>{body}</td>
        </tr>}
    </>
  )
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
