import logo from './logo.svg';
import './App.css';
import React from 'react'
import InputBox from './components/InputBox'
import { useState } from "react"

function App() {
  // states
  const [colAmt, setColAmt] = useState(2)  // initial value should start as 0



  // const [rowAmt, setRowAmt] = useState(0)
  // const handleRowInput = (event) => {
  //   setRowAmt(event.target.value)
  //   console.log("event.target.value: ", event.target.value)
  // }

  const handleDimensions = (event) => {
    setColAmt(event.target.value)
  }

  if (colAmt <= 1) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            How many columns are in your matrix?
          </h1>
          <select value={colAmt} onChange={handleDimensions}>
            <option value="0"> </option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </header>
      </div>
    );

  } else {
    return (
      <div className="App">
        <header className="App-header">
          There are {colAmt} columns.

          <br />
          <br />
          Please input your transformation values:
          {/* <InputBox setR0C0={setR0C0} setR0C1={setR0C1} setR1C0={setR1C0} setR1C1={setR1C1} /> */}
          <InputBox />
        </header >
      </div >
    );

  }
}

export default App;
