import './App.css';
import React from 'react';
// import {alibabalogo} from './Assets/Img/alibabalogo.svg'
function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <a href="/">
        Products
      </a>
      <li>Manufacturers</li>
         </div>
         <div className="navbarItems">
          {/* <input type="text" className='navbarItems'> Search </input> */}
         {/* <img src={require("../src/Assets/Img/alibabalogo.svg")} alt="" /> */}
         <input type="text" className='navbarItems'>Input the text field</input>
         </div>
      </div>
  );
}

export default App;
