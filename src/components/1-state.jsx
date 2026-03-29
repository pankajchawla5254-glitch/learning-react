import { useState } from "react";

function State () {
    const [name, setName] = useState("Pankaj")
    const handleClick = () => {
        setName("Rohit")
        console.log(name);
        
    }
    return (
        <div>
            <h1>use of state in react js</h1>
            <h2>{name}</h2>
            <button onClick={handleClick}>Change name</button>
        </div>
    )
}

export default State