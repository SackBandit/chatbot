import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, chatbot } from './App';
import "./styles.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
    <div className="App-container">
    <App />
  </div>
  <div className="chatbot-container">
  {chatbot()}
  </div>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
