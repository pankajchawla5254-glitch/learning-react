import { useState } from "react";

function CounterApp() {
    const [countincrease, setCountincrease] = useState(0)
    const [countdecrease, setCountdecrease] = useState(0)


    const handleIncrease = () => {
        setCountincrease(countincrease + 1)
    }

    const handleDecrease = () => {
        setCountdecrease(countdecrease - 1)
    }

    return (
        <div>
            <h1>count the clicks</h1>

            <button onClick={handleIncrease}>increase</button>
            <h2>Counter:{countincrease}</h2>
            <button onClick={handleDecrease}>decrease</button>
            <h2>Counter:{countdecrease}</h2>
        </div>
    )
}

export default CounterApp