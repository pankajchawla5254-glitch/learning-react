function Wraper({children,color="green"}){
    return(
        <div style={{color:color, border:"5px solid green", margin:"10px"}}>
            {children}
        </div>
    )
}

export default Wraper