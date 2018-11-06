import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/configStore';

hydrate(
  <Provider>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
