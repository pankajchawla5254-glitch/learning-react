import { useState } from "react";

function Multipleconditon() {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h1>apply multiple condition in js</h1>
            <h2>counter:{count}</h2>
            <button onClick={() => setcount(count + 1)}>Counter</button>
            {
                count === 1 ? <h1>first condition</h1>
                    : count === 2 ? <h1>second condtion</h1>
                        : count === 3 ? <h1>third conditon</h1>
                            : count === 4 ? <h1>fourth condition</h1>
                                : <h1>No any condition</h1>
            }
        </div>
    )
}

export default Multipleconditon