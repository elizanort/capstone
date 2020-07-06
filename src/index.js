import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
// import App from './App';
import LoadingScreen from './Components/Loading/LoadingScreen.js'
import * as serviceWorker from './serviceWorker';
import './Font/Raleway-Regular.ttf';


ReactDOM.render(
  
    <React.StrictMode>
      <LoadingScreen />
    </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
