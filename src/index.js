import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer/store';
import App from './container/App.js'
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);