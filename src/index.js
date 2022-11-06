import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";
 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);