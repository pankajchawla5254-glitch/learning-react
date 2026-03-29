import { useState } from 'react'
import React from 'react'

const DynamicInline = () => {

    const [cardTheme, setCardTheme] = useState({
        border: "1px solid green",
        width: "200px",
        boxShadow: "1px 2px 3px o #cccccc57",
        margin: "10px"
    })

    const [textcolor, setTextcolor] = useState("black")

    const updateTheme = (bgColor, textCOlor) => {
        setCardTheme({ ...cardTheme, backgroundColor: bgColor })
        setTextcolor(textCOlor)
    }

    const image = "data:image/png;base64,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"
    return (
        <div>
            <h1 style={{ color: "red", }}>how to use dynamic and conditional inline styling</h1>
            <button onClick={() => updateTheme("grey", "green")}>grey</button>
            <button onClick={() => updateTheme("orange", "grey")}>default</button>
            <div style={cardTheme}>
                <img src={image} alt="passport-photo" />
                <div style={{ color: textcolor }}>
                    <p>Name: Pankaj</p>
                    <p>Age: 24</p>
                    <p>email:</p>
                </div>
            </div>
            <div style={cardTheme}>
                <img src={image} alt="passport-photo" />
                <div style={{ color: textcolor }}>
                    <p>Name: Pankaj</p>
                    <p>Age: 24</p>
                    <p>email:</p>
                </div>
            </div><div style={cardTheme}>
                <img src={image} alt="passport-photo" />
                <div style={{ color: textcolor }}>
                    <p>Name: Pankaj</p>
                    <p>Age: 24</p>
                    <p>email:</p>
                </div>
            </div><div style={cardTheme}>
                <img src={image} alt="passport-photo" />
                <div style={{ color: textcolor }}>
                    <p>Name: Pankaj</p>
                    <p>Age: 24</p>
                    <p>email:</p>
                </div>
            </div>
        </div>
    )
}

export default DynamicInline;