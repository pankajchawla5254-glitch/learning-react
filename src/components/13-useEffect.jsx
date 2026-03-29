import { useEffect, useState } from "react";

function Effect() {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    function callOnce() {
        console.log("control this fucntion since this going to be called for once only when i use the useeffect");

    }

    useEffect(() => {
        counterFunction();
    }, [counter, data])


    function counterFunction() {
        console.log("Counter", counter);
        console.log("data", data);

    }


    return (
        <div>
            <h1>how to use useEffect in react</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter:{counter}</button>
            <button onClick={() => setData(data + 1)}>Data:{data}</button>
        </div>
    )
}

export default Effect;