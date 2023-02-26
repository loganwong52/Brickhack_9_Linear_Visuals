import React from 'react'
import { useState, useEffect } from "react"
import SubmitInputBtn from './SubmitInputBtn'

// For now, User Input is always assumed to be a 2x2 matrix.

function InputBox({ setReadyToTransform, r0c0, setR0C0, r0c1, setR0C1, r1c0, setR1C0, r1c1, setR1C1 }) {
    const inputBoxSize = "80px"
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true)

    useEffect(() => {
        if (isNaN(r0c0) || isNaN(r0c1) || isNaN(r1c0) || isNaN(r1c1)) {
            setDisableSubmitBtn(true)
        } else {
            setDisableSubmitBtn(false)
        }

    }, [r0c0, r0c1, r1c0, r1c1])


    const helper = (event) => {
        // console.log("event: ", event.target.value, "   eventType: ", typeof event.target.value)
        // console.log("Length: ", event.target.value.length)
        let input = Number(event.target.value)
        // console.log("INPUT: ", input, "   TYPE: ", typeof input)

        if (event.target.value.length === 0) {
            input = NaN
        }
        event.preventDefault()
        return input
    }

    const handleRow0Col0 = (event) => {
        let input = helper(event)
        setR0C0(input)
    }

    const handleRow0Col1 = (event) => {
        let input = helper(event)
        setR0C1(input)
    }

    const handleRow1Col0 = (event) => {
        let input = helper(event)
        setR1C0(input)
    }

    const handleRow1Col1 = (event) => {
        let input = helper(event)
        setR1C1(input)
    }

    return (
        <div>
            {/* <p>
                {r0c0}
                &emsp;
                {r0c1}
                <br />
                {r1c0}
                &emsp;
                {r1c1}
            </p> */}


            <span>
                <label>
                    <input type="text" placeholder='[0,0]' style={{ width: inputBoxSize }} onChange={handleRow0Col0} />
                </label>
            </span>
            &emsp;
            <span>
                <label>
                    {/* Row 0, Col 1: */}
                    {/* <br /> */}
                    <input type="text" placeholder='[0,1]' style={{ width: inputBoxSize }} onChange={handleRow0Col1} />
                </label>
            </span>

            <br />

            <span>
                <label>
                    {/* Row 1, Col 0: */}
                    {/* <br /> */}
                    <input type="text" placeholder='[1,0]' style={{ width: inputBoxSize }} onChange={handleRow1Col0} />
                </label>
            </span>
            &emsp;
            <span>
                <label>
                    {/* Row 1, Col 1: */}
                    {/* <br /> */}
                    <input type="text" placeholder='[1,1]' style={{ width: inputBoxSize }} onChange={handleRow1Col1} />
                </label>
            </span>

            <br />
            {
                disableSubmitBtn
                    ? setReadyToTransform(false)
                    : <SubmitInputBtn setReadyToTransform={setReadyToTransform} />
            }

        </div >
    )
}

export default InputBox;