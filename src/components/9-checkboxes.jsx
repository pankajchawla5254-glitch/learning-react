import { useState } from "react";

function Checkboxes() {
    const [skills, setSkills] = useState([]);
    const handleSkills = (e) => {
        console.log(e.target.value, e.target.checked);
        setSkills(e.target.value);

        if (e.target.checked) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }
    return (
        <div>
            <h1>how to use Checkboxes in react</h1>
            <input type="checkbox" onChange={handleSkills} value="php" id="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} value="js" id="js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} value="java" id="java" />
            <label htmlFor="java">Java</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} value="node" id="node" />
            <label htmlFor="node">Node</label>
            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Checkboxes;