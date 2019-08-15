import React from 'react';
import Table from 'react-bootstrap/Table';
import { EmailItem } from '../email-item/index';

export function DesktopEmailItems(props) {
  // const { isMobile } = props;

  const tableHeader = (
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Subject</th>
        <th>Date</th>
      </tr>
  );

  return (
    <div>
      <Table>
        <thead>
          {tableHeader}
        </thead>
        <tbody>
          {EmailItem}
        </tbody>
      </Table>
    </div>
  );
}