import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';


/*
function Name(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function GG() {
  return (
    <>
	    <h1>what your name?</h1>
	    <Name brand="Rashed" />
    </>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App />  </React.StrictMode>);


reportWebVitals();
