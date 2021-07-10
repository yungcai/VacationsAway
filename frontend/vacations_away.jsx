import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions'
import Root from './components/root';
import configureStore from './store/store';
import {receiveCurrentUser} from './actions/session_actions';
import { fetchStays } from './util/stays_api_util';

/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/


document.addEventListener('DOMContentLoaded', ()=> {
    // const storetest = configureStore();
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    const store = configureStore()
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.receiveCurrentUser = receiveCurrentUser;
    // let store;
    // if (window.currentUser) {
    //   const preloadedState = {
    //     session: { id: window.currentUser.id },
    //     entities: {
    //       users: { [window.currentUser.id]: window.currentUser }
    //     }
    //   };
    //   store = configureStore(preloadedState);
    //   delete window.currentUser;
    // } else {
    //   store = configureStore();
    // }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})