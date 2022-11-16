import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Loading from './components/Loading';
import Enigma from './components/Enigma';

ReactDOM.render(
  <React>
    <Loading />
    <Enigma />
    <App />
  </React>,
  document.getElementById('root')
);
