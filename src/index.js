import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
