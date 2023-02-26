import React from 'react'
import { useState, useEffect } from "react"
import SubmitInputBtn from './SubmitInputBtn'

// For now, the User Input is always assumed to be a 2x2 transformation matrix.
function InputBox({ setReadyToTransform, r0c0, setR0C0, r0c1, setR0C1, r1c0, setR1C0, r1c1, setR1C1 }) {
    const inputBoxSize = "80px"
    const [showSubmitBtn, setShowSubmitBtn] = useState(true)

    /**
     * Listens for ALL 4 inputs in the 2x2 transformation matrix.
     * When they're all NOT NaN, then the Submit Button will appear.
     */
    useEffect(() => {
        if (isNaN(r0c0) || isNaN(r0c1) || isNaN(r1c0) || isNaN(r1c1)) {
            setShowSubmitBtn(true)
        } else {
            setShowSubmitBtn(false)
        }

    }, [r0c0, r0c1, r1c0, r1c1])


    /**
     * Gets the user input, which is initially a string.
     * Converts it in to a number and checks if it's a valid number.
     * If invalid, it's NaN.
     * @param {*} event 
     * @returns 
     */
    const helper = (event) => {
        let input = Number(event.target.value)
        if (event.target.value.length === 0) {
            input = NaN
        }
        event.preventDefault()
        return input
    }


    /**
     * Handles input for row 0, col 0
     * @param {*} event 
     */
    const handleRow0Col0 = (event) => {
        let input = helper(event)
        setR0C0(input)
    }

    /**
     * Handles input for row 0, col 1
     * @param {*} event 
     */
    const handleRow0Col1 = (event) => {
        let input = helper(event)
        setR0C1(input)
    }

    /**
     * Handles input for row 1, col 0
     * @param {*} event 
     */
    const handleRow1Col0 = (event) => {
        let input = helper(event)
        setR1C0(input)
    }

    /**
     * Handles input for row 1, col 1
     * @param {*} event 
     */
    const handleRow1Col1 = (event) => {
        let input = helper(event)
        setR1C1(input)
    }

    return (
        <div>
            <span>
                <label>
                    <input type="text" placeholder='[0,0]' style={{ width: inputBoxSize }} onChange={handleRow0Col0} />
                </label>
            </span>
            &emsp;
            <span>
                <label>
                    {/* Row 0, Col 1: */}
                    <input type="text" placeholder='[0,1]' style={{ width: inputBoxSize }} onChange={handleRow0Col1} />
                </label>
            </span>

            <br />

            <span>
                <label>
                    {/* Row 1, Col 0: */}
                    <input type="text" placeholder='[1,0]' style={{ width: inputBoxSize }} onChange={handleRow1Col0} />
                </label>
            </span>
            &emsp;
            <span>
                <label>
                    {/* Row 1, Col 1: */}
                    <input type="text" placeholder='[1,1]' style={{ width: inputBoxSize }} onChange={handleRow1Col1} />
                </label>
            </span>

            <br />
            {
                showSubmitBtn
                    ? setReadyToTransform(false)
                    : <SubmitInputBtn setReadyToTransform={setReadyToTransform} />
            }

        </div >
    )
}

export default InputBox;