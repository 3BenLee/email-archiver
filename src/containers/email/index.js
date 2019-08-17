import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { connect } from 'react-redux'

import { EmailWrapper } from '../../components/email-wrapper';
import { fetchEmail, viewEmailBody } from '../../actions/email';
import './index.css';

class Email extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEmail());
  }

  handleEmailClick = (emailId) => {
    const { email: { emailData } } = this.props;
    this.props.dispatch(viewEmailBody(emailData, emailId));
  }

  render() {
    const { isMobile, email } = this.props;

    const emailCount = (
      <div className='emailCount'>
        {email.emailData.length}
      </div>
    )

    const header = (
      <>
        <InputGroup className="mb-3 calendarInput">
          <FormControl
            placeholder="Calendar Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Mag Img</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <div className='headerResults'><strong>Results: {emailCount} mail(s)</strong></div>
      </>
    );

    return (
      <div>
        {header}
        {email.emailData.length > 0 && (
          <EmailWrapper
            isMobile={isMobile}
            dataSource={email.emailData}
            onEmailClick={this.handleEmailClick}
          />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email
  }
}

export default connect(mapStateToProps, null)(Email);