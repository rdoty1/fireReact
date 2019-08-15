import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDiYA2WTzjODoJK089J4NUoMBb5p4Zq4Bw",
    authDomain: "forfun-d3026.firebaseapp.com",
    databaseURL: "https://forfun-d3026.firebaseio.com",
    projectId: "forfun-d3026",
    storageBucket: "",
    messagingSenderId: "926016092121",
    appId: "1:926016092121:web:dc4d1d6642f1ae0c"
  };

  console.log(firebaseConfig)


firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
