import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
// import App from './App';
import './Styles/styles.scss';


import * as serviceWorker from './serviceWorker';

import HomeScreen from './Components/Home/HomeScreen';
// import InformationScreen from './Components/Information/InformationScreen';



ReactDOM.render(
  
    <React.StrictMode>
      <HomeScreen/>
    </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
