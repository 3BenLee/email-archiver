import React from 'react';
import icon_arrow01 from '../../static/svg/icon_arrow01.svg';

export function MobileEmails() {
  return (
    <div>
      <h3>From</h3>
      <img src={icon_arrow01} alt='up arrow' />
      <h3>| To</h3>
      <h3>| Subject</h3>
      <h3>| Date</h3>
    </div>
  );
}
