import 'materialize-css/dist/css/materialize.min.css'; //probably do not need this.  this will be for my boilerplate
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));   //first argument is the reducers in the app. the second is initial state

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

