import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import {  store } from './redux/store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="/rent-car">
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
