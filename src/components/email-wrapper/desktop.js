import React from 'react';
import Table from 'react-bootstrap/Table';
import icon_arrow01 from '../../static/svg/icon_arrow01.svg';
import { EmailItemDesktop } from '../email-item/desktop';
import './desktop.css';

export function DesktopEmail(props) {
  const { dataSource, onEmailClick } = props;

  return (
    <div className='tableWrapper'>
      <Table responsive='sm desktopTable'>
        <thead>
          <tr className='topRow'>
            <th>From</th>
            <th>To</th>
            <th></th>
            <th>Subject</th>
            <th></th>
            <th>Date <img src={icon_arrow01} height='10px' width='10px' alt='up arrow' /></th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => <EmailItemDesktop key={index} {...item} onClick={() => onEmailClick(item.id)} />)}
        </tbody>
      </Table>
    </div>
  );
}