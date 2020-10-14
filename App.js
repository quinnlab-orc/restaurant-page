import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router";
import pageLoad from './heading.js';
import makeTab1 from './tabs/tab1.js';
import makeTab2 from './tabs/tab2.js';
import makeTab3 from './tabs/tab3.js';

function App() {
  const [display, setDisplay] = React.useState('');

  const handleClick = (value) => {
    if (value === 1) {
      console.log("value: "+value)
      setDisplay(makeTab1)
    } else if (value === 2) {
      console.log("value: "+value)
      setDisplay(makeTab2)
    } else if (value === 3) {
      console.log("value: "+value)
      setDisplay(makeTab3)
    }
  }
  

  return (
    <body>  
      <div className="App">
       
        {pageLoad()}

        <div className="tabs">
          <div onClick={() => handleClick(1)}>Menu</div>
          <div onClick={() => handleClick(2)}>About Us</div>
          <div onClick={() => handleClick(3)}>Contact</div> 
        </div>
        {display}

          
      </div>
    </body>
  );
}

export default App;
