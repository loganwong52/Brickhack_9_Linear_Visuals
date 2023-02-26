import React from 'react'

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