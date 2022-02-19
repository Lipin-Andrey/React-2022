import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styles from './Message.modules.css';

const Message = 'Andrey';

ReactDOM.render(
 <React.StrictMode>
   <App name={Message} />
 </React.StrictMode>,
 document.getElementById("root")
);