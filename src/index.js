import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Main';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
