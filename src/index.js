import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';  
import App from './App'; // import our main App
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; // an open source css component library

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
