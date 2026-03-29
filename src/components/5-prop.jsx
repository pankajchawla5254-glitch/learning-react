import { useState } from "react";
import College from "./5-props/College";
import Student from "./5-props/student";
import User from "./5-props/user";

function Prop() {
    // let userName = "Rohit";
    // let age = 23;
    // let email = "rohitrohit27142@gmail.com"
    let userObj = {
        name: "Pankaj kumar",
        age: 24,
        email: "pankajchawla5254@gmail.com",
    }

    let userObj2 = {
        name: "Rohit",
        age: 23,
        email: "rohitrohit27142@gmail.com",
    }

    let userObj3 = {
        name: "Satnam",
        age: 23,
        email: "satnam@gmail.com",
    }

    let collegeNames = ["IIT","NIT","DU","PU","MIT"]
    const [student, setstudent] = useState()
    return (
        <div>
            <h1>use of props in react js</h1>

            { student && <Student name={student} />}
            <button onClick={()=>setstudent("Pankaj kumar")}>update the student name</button>
            {/* <User name={userName} age={age} email={email}/> */}
            {/* <College name={collegeNames[0]}/>
            <College name={collegeNames[1]}/>
            <College name={collegeNames[2]}/>
            <College name={collegeNames[3]}/>
            <College name={collegeNames[4]}/> */}


            <User user={userObj} />
            <User user={userObj2} />
            <User user={userObj3} />

        </div>
    )
}

export default Prop