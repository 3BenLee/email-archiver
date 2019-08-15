import React from 'react';
import './App.css';
import EmailTable from './containers/email-table';
import { Provider } from 'react-redux';
import store from './store';

function detectMobile() {
  if(window.innerWidth <= 800) {
    return true;
  } else {
    return false;
  }
}

function App() {
  const isMobile = detectMobile();
  console.log(isMobile);
  return (
    <Provider store={store}>
      <div className="App">
        <EmailTable isMobile={isMobile} />
      </div>
    </Provider>
  );
}

export default App;
