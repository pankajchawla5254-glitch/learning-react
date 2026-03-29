import User from "./6-advanceprop/user";
import Wraper from "./6-advanceprop/wraper";

function Advancprop() {
    return (
        <div>
            <h1>advance props in react js</h1>
            <Wraper color="orange">
                <h1>User Component</h1>
            </Wraper>

            <Wraper>
                <h1>Hello everyone!</h1>
                <h1 style={{color:"red"}}>Please Login!</h1>
            </Wraper>

            <Wraper>
                <h1>Hello everyone!</h1>
                <h1>Please Login!</h1>
            </Wraper>
            {/* <User name="Pankaj kumar" />
            <User name="Rohit" />
            <User />
            <User name="Rohit" />
            <User name="Rohit" />
            <User name="Rohit" />
            <User /> */}
        </div>
    )
}

export default Advancprop;