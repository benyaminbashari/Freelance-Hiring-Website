import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import Router from './components/Router'
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,storeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>,
    document.getElementById("root")
);