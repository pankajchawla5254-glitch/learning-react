function User ({displayName,name,getUser}) {
    return(
        <div>
            <button onClick={()=>displayName(name)} > pass function</button>
            <button onClick={()=>getUser(name)} >get</button>
        </div>
    )
}

export default User;