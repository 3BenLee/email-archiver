import React from 'react';
import PropTypes from 'prop-types';

import { EmailItemDesktop } from './desktop';
import { EmailItemMobile } from './mobile';

export function EmailItem(props) {
  const { isMobile } = props;
  const Component = isMobile ? EmailItemMobile : EmailItemDesktop;
  return (
    <Component {...props} />
  );
}

EmailItem.propTypes = {
  isMobile: PropTypes.bool,
  id: PropTypes.number,
  sender: PropTypes.string,
  receiver: PropTypes.array,
  remainingEmail: PropTypes.number,
  subject: PropTypes.string,
  date: PropTypes.string,
  is_expanded: PropTypes.bool,
};
