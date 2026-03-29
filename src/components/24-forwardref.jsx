import { useRef } from "react"
import Userinput from "./24-forwardref/userinput";

function Forwardreff () {
    const inputRef = useRef(null);
    const updateInput = () => {
        inputRef.current.value = 1000
        inputRef.current.focus()
        inputRef.current.style.color = "red"
    }
    return(
        <div>
            <h1>use of forward ref in react</h1>
            <Userinput ref={inputRef}/>
            <button onClick={updateInput}>Update the Input field</button>
        </div>
    )
}

export default Forwardreff