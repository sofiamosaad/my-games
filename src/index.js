import React from  "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTTBL21FrcZegojZcOu4zSCoZsy12cls0",
    authDomain: "my-games-7d067.firebaseapp.com",
    databaseURL: "https://my-games-7d067.firebaseio.com",
    projectId: "my-games-7d067",
    storageBucket: "my-games-7d067.appspot.com",
    messagingSenderId: "68240876388",
    appId: "1:68240876388:web:ed0a5590f6796683705071",
    measurementId: "G-X1BJM9K457",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("app"));