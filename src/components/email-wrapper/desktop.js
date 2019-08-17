import React from 'react';
import Table from 'react-bootstrap/Table';
import { EmailItemDesktop } from '../email-item/desktop';

export function DesktopEmail(props) {
  const { dataSource, onEmailClick } = props;
  console.log(props);
  return (
    <Table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Subject</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item, index) => <EmailItemDesktop key={index} {...item} onClick={() => onEmailClick(item.id)} />)}
      </tbody>
    </Table>
  );
}