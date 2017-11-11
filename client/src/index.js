import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// we are rendering app component
// if you want to put it on mobile use ReactNative instead of ReactDOM on line 9
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
