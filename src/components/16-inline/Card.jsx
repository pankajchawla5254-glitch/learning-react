import React, { useState } from 'react'

const Card = () => {
    const [background, setBackground] = useState(true)
    return (
        <div style={{ color: "white", backgroundColor: "orange", width: "400px" }} >
            <h1>Name: Pankaj Kumar</h1>
            <button onClick={() => setBackground(!background)}>Change background</button>
            {
                background ? <h1 style={{ backgroundColor: 'grey' }}>Pankaj</h1> : <h2 style={{ backgroundColor: 'green' }}>Rohit</h2>
            }
        </div>
    )
}

export default Card