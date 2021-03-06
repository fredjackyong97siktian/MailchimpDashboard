import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterDecider from './RouterDecider'
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router} from "react-router-dom";
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {reducers} from './reducer';
import {AuthProvider} from './context/AuthContext'
import {FetchProvider} from './context/FetchContext'
import { SnackbarProvider} from 'notistack';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <FetchProvider>
            <AuthProvider >
                <SnackbarProvider maxSnack={3} >
                  <RouterDecider/>
                </SnackbarProvider>
            </AuthProvider>
          </FetchProvider>
        </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
