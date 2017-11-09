import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// we are only rendering one component call app here
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
