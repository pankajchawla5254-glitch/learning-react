import User from "./23-passfunc/user";

function PassFun () { 

    const displayName = (name) => {
        alert(name)
    }

    const getUser = (name) => {
        alert(`get ${name} user funciton called`)
    }

    return(
        <div>
            <h1>how to pass function as props in react</h1>
            <User displayName={displayName} name="pankaj chawla" getUser={getUser}/>
            <User displayName={displayName} name="rohit" getUser={getUser}/>
            <User displayName={displayName} name="satnam" getUser={getUser}/>
            <User displayName={displayName} name="anjali" getUser={getUser}/>
        </div>
    )
}

export default PassFun