/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './AppProvider'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <App name={'Home page'} />
    </AppProvider>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
reportWebVitals();