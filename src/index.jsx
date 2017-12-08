/** @jsx preact.h */
/* global process require */

import preact from 'preact';
import Router from 'preact-router';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

const Main = () => (
  <Router>
    <App default />
  </Router>
);

preact.render(
  <Main />,
  document.body
);
