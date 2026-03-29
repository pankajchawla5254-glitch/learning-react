import { useEffect, useState } from "react";
import Counter from "./15-lifecycle/Counter";

function LifeCycle() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [toggle, setToggle] = useState(true)

    useEffect(()=>{
        return()=>{
            console.log("unmounting phase");
            
        }
    },[toggle])


    return (
        <div>
            <h1>Life cycle in react mounting,updating,unmounting</h1>
            {
                toggle? <Counter count={count} data={data} /> : null
            }

            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button onClick={() => setData(data - 1)}>Data</button>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default LifeCycle;
