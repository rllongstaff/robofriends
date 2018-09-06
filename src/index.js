import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css';  
import CardList from './CardList'; // import our Cardlist component
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; // an open source css component library
import { robots } from './robots'; // a list of our js robot objects

ReactDOM.render(
    <CardList robots={robots} />
, document.getElementById('root'));
registerServiceWorker();
