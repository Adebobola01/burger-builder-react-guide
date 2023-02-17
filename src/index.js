import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react';
import { legacy_createStore as createStore } from 'redux';
import reducer from './store/reducer';
import { createBrowserHistory } from "history";
const history = createBrowserHistory({forceRefresh: true});

const store = createStore(reducer);

const app = (
    <Provide store={store} >
        <BrowserRouter history={history} >
            <App/>
        </BrowserRouter>
    </Provide>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
