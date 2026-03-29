import { useState } from "react"

function Controlled() {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div>
            <h1>Controlled Component</h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <br /><br />
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" />
                <br /><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <br /><br />
                <button>Submit</button>
                <button onClick={() => { setName(""), setPass(""), setEmail("") }}>Clear</button>

                <h3>{name}</h3>
                <h3>{pass}</h3>
                <h3>{email}</h3>

            </form>
        </div>
    )
}

export default Controlled