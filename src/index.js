import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducers'

const store=createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>

,document.getElementById('root'))