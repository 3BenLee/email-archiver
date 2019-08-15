import React, { useState, useEffect } from 'react';
import  Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { EmailItem } from '../../components/email-item';
import { getEmailData, getRemainingEmailNumber, viewEmailBody } from '../../actions';

export default function EmailTable(props) {
  const { isMobile } = props;

  // isMobile === true => Email Component for Mobile
  // isMobile === false => Email Component for Desktop


  const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    getEmailData().then(data => {
      setEmailData(data);
    });
  }, []);

  const handleEmailClick = (emailData, emailId) => {
    const newEmailData = viewEmailBody(emailData, emailId);
    setEmailData(newEmailData);
  }

  const tableBody = emailData && emailData.length > 0 && emailData.map((item, index) => {
    const remaining_email = getRemainingEmailNumber(item.receiver);
    return (
      <React.Fragment key={index}>
          <EmailItem
            isMobile={isMobile}
            {...item}
            remaining_email={remaining_email}
            onClick={() => handleEmailClick(emailData, item.id)}
          />
      </React.Fragment>
    )
  });

  const tableHeader = (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Calendar Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">Mag Img</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <tr className='thead-light'>
        <th>From</th>
        <th>To</th>
        <th>Subject</th>
        <th>Date</th>
      </tr>
    </>
  );
  return (
    <div>
      <Table>
        <thead>
          {tableHeader}
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </div>
  )
}
