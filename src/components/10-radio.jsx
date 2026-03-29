import { useState } from "react";

function Radio() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("delhi");
    return (
        <div>
            <h1>how to use radio buttons in react</h1>
            <h4>select gender</h4>
            <input type="radio" onChange={(e) => setGender(e.target.value)} name="gender" value={"male"} checked={gender == "male"} id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(e) => setGender(e.target.value)} name="gender" value={"female"} checked={gender == "female"} id="female" />
            <label htmlFor="female">Female</label>
            <h2>Selected Gender: {gender}</h2>
            <br /><br /><br />
            <h4>Select City</h4>
            <select onChange={(e) => setCity(e.target.value)} defaultValue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="gurugram">Gurugram</option>
                <option value="nangloi">Nangloi</option>
                <option value="delhi">Delhi</option>
            </select>
            <h2>Selected City: {city}</h2>
        </div>
    )
}

export default Radio;