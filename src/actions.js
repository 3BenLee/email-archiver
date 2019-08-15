export function getEmailData() {
  const emailData = require('./data/emailData.json');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(emailData), 1000);
  })
}

export function getRemainingEmailNumber(emails = []) {
  return emails.length - 1;
}

export function viewEmailBody(emails = [], selectedEmailId) {
  return emails.map(item => {
    if (item.id === selectedEmailId) {
      item.is_expanded = !item.is_expanded;
    }
    return item;
  });
}