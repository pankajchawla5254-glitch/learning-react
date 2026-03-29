function Map() {
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
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>age</td>
                        <td>email</td>
                        <td>role</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <h1>dummy table</h1>
            <table border={1}>
                <thead>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>email</td>
                    <td>role</td>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>pankaj</td>
                    <td>24</td>
                    <td>pankaj@test.com</td>
                    <td>QA intern</td>
                </tbody>
                <tbody>
                    <td>2</td>
                    <td>rohit</td>
                    <td>23</td>
                    <td>rohit@test.com</td>
                    <td>QA intern</td>
                </tbody>
                <tbody>
                    <td>3</td>
                    <td>satnam</td>
                    <td>23</td>
                    <td>satnam@test.com</td>
                    <td>security guard</td>
                </tbody>
                <tbody>
                    <td>4</td>
                    <td>hitesh</td>
                    <td>21</td>
                    <td>hitesh@test.com</td>
                    <td>sales person</td>
                </tbody>
            </table>
        </div>
    );
}

export default Map;