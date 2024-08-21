import "./index.css";
import {useRef} from "react";
export const UseRef = () =>{

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const username = useRef(null);
    const password = useRef(null);

    console.log(username);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(username.current.value , password.current.value);    
    }

    

    return (
        <form onSubmit={handleSubmit}> 

            <input type="text" id="username" ref={username} /> 
            <br />
            <input type="text" id="password" ref={password} />
            <br />
            <button>Submit</button>
        </form>
    )
};