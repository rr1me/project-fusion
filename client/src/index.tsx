import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/_resets.scss';
import './assets/styles/_root.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
