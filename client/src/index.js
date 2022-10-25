import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import "@mui/material";
import "@material-ui/core"

//TODO: implement login
//if loggedIn render App
//if !loggedIn render landing page

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);