import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './app/Header.jsx';
import Search from './app/Search.jsx';
import Counter from './app/Counter.jsx';
import Footer from './app/Footer.jsx';
import TimeDisplay from './app/TimeDisplay.jsx';
import Lifecycle from './app/Lifecycle.jsx';
import Properties from './app/Properties.jsx';
import Prop from './app/Prop.jsx';
import PropES5 from './app/DefaultProp.jsx';
import PropES6 from './app/DefaultPropES6.jsx';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Counter />, document.getElementById('counter'));
//setInterval(function (){ ReactDOM.render(<TimeDisplay/>, document.getElementById('filter'));},1000);
ReactDOM.render(<Lifecycle/>, document.getElementById('filter'));
//ReactDOM.render(<Search />, document.getElementById('filter'));
ReactDOM.render(<PropES6 />, document.getElementById('properties'));
ReactDOM.render(<Footer />, document.getElementById('footer'));



//registerServiceWorker();


