import { useRef } from "react";

function Uncontrolled() {
    const userRef = useRef();
    const passwordRef = useRef();
    const handleSubmission = (e) => {
        e.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log(user, password);

    }

    const handleSubmissionRef = (e) => {
        e.preventDefault();
        const user = userRef.current.value; 
        const password = passwordRef.current.value; 
        console.log("handleSubmissionRef",user,password);
        
    }
    return (
        <div>
            <h1>uncontrolled components with dom manipulation</h1>
            <form action="" method="post" onSubmit={handleSubmission}>
                <input type="text" id="userRef" placeholder="Enter user name" />
                <br /><br />
                <input type="password" id="passwordRef" placeholder="Enter your password" />
                <br /><br />
                <button>Submit</button>
            </form>
            <hr />
            <h1>uncontrolled components useRef</h1>
            <form action="" method="post" onSubmit={handleSubmissionRef}>
                <input ref={userRef} type="text" id="user" placeholder="Enter user name" />
                <br /><br />
                <input ref={passwordRef} type="password" id="password" placeholder="Enter your password" />
                <br /><br />
                <button>Submit  with ref</button>
            </form>
        </div>
    )
}

export default Uncontrolled;