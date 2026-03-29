import { useState } from "react";
import Rohit from "./3-toggle/rohit";
import Pankaj from "./3-toggle/pankaj";

function Toggle() {
    const [display, setdisplay] = useState(true)
    return (
        <div>
            <h1>Toggle in react js</h1>
            {
                display ? <Rohit/> : <Pankaj/>
            }
            <button onClick={() => setdisplay(!display)}>Toggle</button>
        </div>
    )
}

export default Toggle