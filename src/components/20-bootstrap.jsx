import BasicExample from "./20-bootstrap/Navbar"
import { Button } from "react-bootstrap"
function Bootstrap () {
    return(
        <div>
            <BasicExample/>
            <h1>boostrap installation in react</h1>
            <Button variant="danger">welcome bootstrap</Button>
            <Button variant="primary">welcome bootstrap</Button>
            <Button variant="danger">welcome bootstrap</Button>
            <Button variant="success">welcome bootstrap</Button>
            <Button variant="secondary">welcome bootstrap</Button>
            <Button variant="info">welcome bootstrap</Button>
        </div>
    )
}

export default Bootstrap