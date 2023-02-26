import React from 'react'

/**
 * Takes the state readyToTransform from App.js
 * and turns it true when this button clicked.
 */
function SubmitInputBtn({ setReadyToTransform }) {

    const handleSubmit = (event) => {
        setReadyToTransform(true)
        event.preventDefault()
    }

    return (
        <div>
            <button type="submit" onClick={(event) => handleSubmit(event)}>
                Apply transformation!
            </button>
        </div>
    )

}

export default SubmitInputBtn;