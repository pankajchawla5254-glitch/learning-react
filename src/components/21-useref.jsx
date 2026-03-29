import { Button } from "react-bootstrap";
import { useRef } from "react";
function Useref() {
    const inputRef = useRef(null);
    const h1Ref = useRef(null);

    const inputHandler = () => {
        inputRef.current.focus();
        inputRef.current.style.color = "red"
        inputRef.current.placeholder = "Welcome to input"
        inputRef.current.value = "Pankaj kumar"
    }

    const toggleHandler = () => {
        if (inputRef.current.style.display != "none") {
            inputRef.current.style.display = "none"
        } else {
            inputRef.current.style.display = "inline"
        }
    }

    const h1Handler = () => {
        h1Ref.current.style.color = "green"
    }
    return (
        <div>
            <h1> how to use useref in react </h1>
            <input ref={inputRef} type="text" placeholder="Enter user name" />
            <Button onClick={inputHandler}>Focus on input field</Button>
            <br /><br />
            <Button style={{ margin: "20px" }} onClick={toggleHandler}>Toggle</Button>
            <h1 ref={h1Ref}>Code step by step</h1>
            <Button onClick={h1Handler}>Handler</Button>

        </div>
    )
}

export default Useref;