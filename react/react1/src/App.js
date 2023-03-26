

import React, {useState} from "react";
//import logo from './logo.svg';
import './App.css';
import MyCoolTitleComponent from "./MyCoolTitleComponent";

function App() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

   // let myCoolVariable ="";
    console.log(lastName);

  return (
    <div className="App">
      <header className="App-header">
          <h2>Component Demo - useState review</h2>
       {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <h2>First React</h2>
      </header>
      <main>
          <input type="text" placeholder="First name" onChange={(e) => {
              console.log(e.target.value)
              //myCoolVariable = e.target.value;
              setFirstName(e.target.value);
          }}></input>
          <input type="text" placeholder="Last name" onChange={(e) => {
              console.log(e.target.value)
              setLastName(e.target.value);
          }}></input>
          <p>Hello, {firstName} {lastName}</p>
        <p>This is my first paragraph.</p>
          <MyCoolTitleComponent></MyCoolTitleComponent>
      </main>
    </div>
  );
}

export default App;
