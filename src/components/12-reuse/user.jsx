const User = ({ data }) => {
    return (
        <div style={{
            border: "5px solid red",
            borderRadius:"30px",
            padding: "10px",
            margin: "20px",
            width: "500px", 
        }}>
            <h3>Id:<span style={{ color: "red" }}>{data.id}</span></h3>
            <h3>Name:<span style={{ color: "red" }}>{data.name}</span></h3>
            <h3>Age:<span style={{ color: "red" }}>{data.age}</span></h3>
            <h3>Email:<span style={{ color: "red" }}>{data.email}</span></h3>
            <h3>Role:<span style={{ color: "red" }}>{data.role}</span></h3>
        </div>
    )
}
export default User;