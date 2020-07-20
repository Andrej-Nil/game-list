import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const application = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
      {application}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
