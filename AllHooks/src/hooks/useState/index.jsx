// import "../Hooks.css"
// import {useState} from "react";
// export const Counter =() =>{
//     // console.log(useState());

//     const[count , setCount] = useState(0);
//     return (<div className="container state-container" style={{textAlign:"center"}}>
//         <h1>useStateHook</h1>
//         <br />
//         <p>{count}</p>
//         <button className="state-button" onClick={() => setCount(count+1)}>Increment</button>
//     </div>
//     );
// };

// Function passed to useState() and setState() runs twice during development mode to prevent developers from eunning side effects.Counter

// ===================== The above code can also be written as ===================================

import {useState} from "react";
export const Counter = () =>{
    const[count , setCount] = useState(0);
    const handleIncrement = () =>{
       setCount(count+1);
       console.log("Inner" , count);
    }
    console.log(" outer" , count);
    return( <div className="container state-container " style={{textAlign:"center"}}>
        <h1>useStateHook</h1>
        <br />
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
   );
};