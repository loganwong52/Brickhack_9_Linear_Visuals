import logo from './logo.svg';
import './App.css';
import React from 'react'
import InputBox from './components/InputBox'
import { useState, useEffect } from "react"

function App() {
  // states
  const [colAmt, setColAmt] = useState(2)  // initial value should start as 0
  const [readyToTransform, setReadyToTransform] = useState(false)

  // The 2x2 transformation matrix
  const [r0c0, setR0C0] = useState(NaN)
  const [r0c1, setR0C1] = useState(NaN)
  const [r1c0, setR1C0] = useState(NaN)
  const [r1c1, setR1C1] = useState(NaN)

  // Simulate passing the 4 values to the GRID and Performs the animation 
  const [startAnimation, setStartAnimation] = useState(false)

  const handleDimensions = (event) => {
    setColAmt(event.target.value)
  }

  useEffect(() => {
    // readyToTransform becomes true when you click the SubmitInputBtn
    // Perhaps you'll want to send the 4 state values to the chart.js graph
    if (readyToTransform) {
      console.log(`Ready to transform: r0c0: ${r0c0},  r0c1: ${r0c1}, r1c0: ${r1c0}, r1c1: ${r1c1}`)
      setStartAnimation(true)
    } else {
      console.log("Not Ready to transform")
      setStartAnimation(false)
    }
  }, [readyToTransform])

  if (colAmt <= 1 || colAmt >= 3) {
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

  } else if (colAmt == 2) {
    return (
      <div className="App">
        <header className="App-header">
          Applying a transformation in {colAmt} dimensions.

          <br />
          <br />
          Please input your transformation values:
          <InputBox setReadyToTransform={setReadyToTransform} r0c0={r0c0} setR0C0={setR0C0} r0c1={r0c1} setR0C1={setR0C1} r1c0={r1c0} setR1C0={setR1C0} r1c1={r1c1} setR1C1={setR1C1} />

          <br />
          {
            startAnimation
              ? <h2>Animation is starting</h2>
              : null
          }
        </header >
      </div >
    );

  }
}

export default App;
