import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';
// Use normalize for every page
import 'normalize.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
