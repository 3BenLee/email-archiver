import React from 'react';
import PropTypes from 'prop-types';
import { DesktopEmailItems } from './desktop';
import { MobileEmails } from './mobile';

export function EmailWrapper(props) {
  const { isMobile } = props;
  const Component = isMobile ? MobileEmails : DesktopEmailItems;
  return (
    <Component {...props} />
  );
}

EmailWrapper.propTypes = {
  isMobile: PropTypes.bool,
  id: PropTypes.number,
  sender: PropTypes.string,
  receiver: PropTypes.array,
  remainingEmail: PropTypes.number,
  subject: PropTypes.string,
  date: PropTypes.string,
  is_expanded: PropTypes.bool,
};