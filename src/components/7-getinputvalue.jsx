import { useState } from "react"
function Getinput() {
    const [val, setVal] = useState("")
    return (
        <div>
            <h1>Get input field value</h1>
            <input type="text" placeholder="Enter here your name" value={val} onChange={(e) => setVal(e.target.value)} />
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>clear value</button>
        </div>
    )
}

export default Getinput