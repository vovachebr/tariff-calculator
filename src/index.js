import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadState,saveState } from "./store"
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/mainReducer';
import * as serviceWorker from './serviceWorker';

let initialState = {
    tariffs:{
        hotWater:160.94,
        couldWater:26.11,
        electricity:4.38,
    },
    history:[]
}


const store = createStore(reducer, loadState() || initialState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
