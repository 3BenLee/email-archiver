import React from 'react';
import PropTypes from 'prop-types';
import { DesktopEmail } from './desktop';
import { MobileEmail } from './mobile';

export function EmailWrapper(props) {
  const { isMobile } = props;
  const Component = isMobile ? MobileEmail : DesktopEmail;
  return (
    <Component {...props} />
  );
}

EmailWrapper.propTypes = {
  dataSource: PropTypes.array,
  isMobile: PropTypes.bool,
  onEmailClick: PropTypes.func,
};