// import { forwardRef } from "react"

// function Userinput (props,ref) {
//     return(
//         <div>
//             <input type="text" ref={ref}  />
//         </div>
//     )
// }
// export default forwardRef(Userinput);
const Userinput = (props) => {
    return(
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}

export default Userinput;