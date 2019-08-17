import React from 'react';
import './App.css';
import Email from './containers/email';
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
  return (
    <Provider store={store}>
      <div className="App">
        <Email isMobile={isMobile} />
      </div>
    </Provider>
  );
}

export default App;
