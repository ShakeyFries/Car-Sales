import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { carReducer } from "./reducers/carReducer";

import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { empty } from 'rxjs';

const carStore = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={carStore}>
    <App />
  </Provider>, rootElement);
