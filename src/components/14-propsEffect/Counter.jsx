import { useEffect } from "react";

function Counter({ count, data }) {

    useEffect(() => {
        handledata();

    }, [data])

    useEffect(() => {
        handleCounter();
    }, [count])


    const handledata = () => {
        console.log("data value function", data);

    }


    const handleCounter = () => {
        console.log("Counter value function", count);

    }

    return (
        <div>
            <h1>counter value prop:{count}</h1>
            <h1>data value prop:{data}</h1>
        </div>
    )
}

export default Counter