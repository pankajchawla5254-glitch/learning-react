import styled from "styled-components";
const Styling = styled.h1`
    color:red;
    border:1px solid green;
    border-radius:2px;
    width: 200px;
    `
function Styled() {

    return (
        <div>
            <h1>how to use styled component in react</h1>
            <Styling>heading1 </Styling>
            <Styling>heading2 </Styling>
            <Styling>heading3 </Styling>
            <Styling>heading4 </Styling>
        </div>
    )
}

export default Styled;