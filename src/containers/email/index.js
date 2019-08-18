import React from 'react';
import { connect } from 'react-redux';
import { EmailWrapper } from '../../components/email-wrapper';
import { fetchEmail, viewEmailBody } from '../../actions/email';

class Email extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEmail());
  }

  handleEmailClick = (emailId) => {
    const { email: { emailData } } = this.props;
    this.props.dispatch(viewEmailBody(emailData, emailId));
  }

  render() {
    const { isMobile, email, } = this.props;

    return (
      <div>
        {email.emailData.length > 0 && (
          <EmailWrapper
            isMobile={isMobile}
            dataSource={email.emailData}
            onEmailClick={this.handleEmailClick}
          />
        )}
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