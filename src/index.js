import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import IRouter from './router'*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import Admin from "./admin";
import IRouter from "./router";

ReactDOM.render(<IRouter />, document.getElementById('root'));
registerServiceWorker();
