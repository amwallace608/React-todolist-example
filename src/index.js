import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import MyApp from './MyApp';



ReactDOM.render( 
    <MyApp />, 
    document.getElementById('root'));

serviceWorker.unregister();
