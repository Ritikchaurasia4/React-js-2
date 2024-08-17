
// In this challenge , You will create a react component dynamically manages state using 'useState' and 'useEffect' hooks . Your component will includes .

// 1. A counter that increments when a button is clicked .
// 2. An input field where users can type their name .
// 3. The document title will update to show the current count .


import {useState , useEffect} from "react";
import "./index.css";
export const Challange = () =>{
    const[count , setCount] = useState(0);
    const[name , setName] = useState(" ");

    const handleCounter = () =>{
        setCount(count + 1);
    }

    useEffect(() =>{
        document.title = `count:${count}`;
    },[count]);

    useEffect(() => {
        console.log(name);
        
    },[name]);

    return(
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>
                Count : <span> {count} </span>
            </p>
            <button onClick={handleCounter}>Increment</button>
            <p>
                Name: <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
    );
};