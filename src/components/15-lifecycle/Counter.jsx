import { useEffect } from "react";

function Counter({ count, data }) {

    // useEffect(() => {
    //     console.log("mounting phase only");
    // })

    useEffect(() => {
        console.log("updating phase only");
    },[count,data])

    // useEffect(() => {
    //     console.log("unmounting phase only");
    // },[count])


    return (
        <div>
            <h1>counter value prop:{count}</h1>
            <h1>data value prop:{data}</h1>
        </div>
    )
}

export default Counter