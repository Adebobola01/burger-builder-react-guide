import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from 'redux';
import reducer from './store/reducers/burgerBuilder';
import { createBrowserHistory } from "history";
const history = createBrowserHistory({forceRefresh: true});

const store = createStore(reducer);

const app = (
    <Provider store={store} >
        <BrowserRouter history={history} >
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
