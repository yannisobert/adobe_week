import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Loading from './components/Loading';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
