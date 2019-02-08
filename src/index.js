import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';


const test = { name: 'Test' }



ReactDOM.render(<App testObj={test} />, document.getElementById('root'));

