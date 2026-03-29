import {useFormStatus} from "react-dom"

function FormStatus() {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 6000));
        console.log("submit");

    }


    function CustomerForm () {
        const {pending} = useFormStatus()
        console.log(pending);
        
        return(
            <div>
                <input type="text" placeholder="Enter your name" />
                <br />
                <br />
                <input type="text" placeholder="Enter your password" />
                <br />
                <br />
                <button disabled={pending}>{pending?"submitting...":"submit"}</button>
            </div>
        )
    }

    return (
        <div>
            <h1>useformstatus hook in React</h1>
            <form action={handleSubmit}>
                <CustomerForm/>
            </form>
        </div>
    )
}

export default FormStatus