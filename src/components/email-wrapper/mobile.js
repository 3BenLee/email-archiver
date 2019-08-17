import React from 'react';
import icon_arrow01 from '../../static/svg/icon_arrow01.svg';
import { EmailItemMobile } from '../email-item/mobile';
import './mobile.css';

export function MobileEmail(props) {
  console.log('mobile', props);
  const { dataSource } = props;

  const mobileHeader = (
    <>
      <ul>
        <li><strong>From </strong><img src={icon_arrow01} height='10px' width='10px' alt='up arrow' /> | </li>
        <li>To | </li>
        <li>Subject | </li>
        <li>Date</li>
      </ul>
    </>
  );
  return (
    <div>
      {mobileHeader}
      <div>
        {dataSource.map( (item, index) => <EmailItemMobile key={index} {...item} />)}
      </div>
    </div>
  );
}
