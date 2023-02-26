import React from 'react'

function SubmitInputBtn({ r0c0, r0c1, r1c0, r1c1 }) {


    const handleSubmit = (event) => {
        console.log("Hello world!")
        event.preventDefault()
        return
    }

    return (
        <div>
            <form onSubmit={() => handleSubmit()}>
                <button type="submit">Apply transformation!</button>
            </form>
        </div>
    )

}

export default SubmitInputBtn;