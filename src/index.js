import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/resume.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/vendor/fontawesome-free/css/all.min.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);