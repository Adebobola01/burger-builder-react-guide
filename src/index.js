import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from "history";
const history = createBrowserHistory({forceRefresh: true});

const app = (
    <BrowserRouter history={history} >
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
