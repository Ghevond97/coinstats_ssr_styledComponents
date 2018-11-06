import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import { ServerStyleSheet } from 'styled-components';

import App from '../../client/App';
import store from '../../client/store/configureStore';
import TablesOfStats from '../../client/components/TableOfStats';

const homePage = router => {
  router.route('*').get((req, res, next) => {
    const actions = TablesOfStats.initialAction(store);

    const sheet = new ServerStyleSheet();

    Promise.all(actions)
      .then(() => {
        const markup = renderToString(
          sheet.collectStyles(
            <Provider store={store}>
              <App />
            </Provider>
          )
        );
        const styles = sheet.getStyleTags();
        const initialData = store.getState();
        res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>
            ${styles}
            <script>window.__REDUX_STATE__ = ${serialize(initialData)}</script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
      })
      .catch(next);
  });

  return router;
};

export default homePage;
