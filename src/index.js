import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getRootNode, initilizeNode} from './Utils';
import "bootstrap/dist/css/bootstrap.min.css";


initilizeNode();
console.log(getRootNode());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
