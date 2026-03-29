import User from "./12-reuse/user"

function Reuse() {
    const student = [{
        id: 1,
        name: "pankaj",
        age: 24,
        email: "pankaj@test.com",
        role: "QA intern"
    },
    {
        id: 2,
        name: "rohit",
        age: 23,
        email: "rohit@test.com",
        role: "QA intern"
    },
    {
        id: 3,
        name: "satnam",
        age: 23,
        email: "satnam@test.com",
        role: "security guard"
    },
    {
        id: 4,
        name: "hitesh",
        age: 23,
        email: "hitesh@test.com",
        role: "sales person"
    }]
    return (
        <div>
            {
                student.map((item)=>(
                    <h1 key={item.id}><User data={item}/></h1>
                ))
            }
        </div>
    )
}

export default Reuse