import { useState } from "react";
import Counter from "./14-propsEffect/Counter"

function PropsEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);


    return (
        <div>
            <h1>how to use useEffect in terms of props</h1>
            <Counter count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button onClick={() => setData(data - 1)}>Data</button>
        </div>
    )
}

export default PropsEffect;