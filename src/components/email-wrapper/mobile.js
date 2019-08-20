import React from 'react';
import icon_arrow01 from '../../static/svg/icon_arrow01.svg';
import { EmailItemMobile } from '../email-item/mobile';
import './mobile.css';

export function MobileEmail(props) {
  const { dataSource, onEmailClick } = props;

  const mobileTableIndex = (
    <>
      <ul>
        <li id='firstListItem'>From <img src={icon_arrow01} height='10px' width='10px' alt='up arrow' /></li>
        <li> |  To  |  </li>
        <li>Subject  |  </li>
        <li>Date</li>
      </ul>
    </>
  );
  return (
    <div>
      {mobileTableIndex}
      <div>
        {dataSource.map( (item, index) => <EmailItemMobile key={index} {...item} onClick={() => onEmailClick(item.id)} />)}
      </div>
    </div>
  );
}
