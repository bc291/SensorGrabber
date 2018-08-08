import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './normalize.css';
import './fonts/font-awesome-4.2.0/css/font-awesome.min.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
