// import {useEffect, useState} from "react";
// import "./index.css";

// export const ReactUseEffect =() =>{
//     const[count , setCount] = useState(0);

//     useEffect(() =>{                               
//         console.log("Count value:" , count);
//     } ,[count]);

//     return(
//         <div className="container effect-container">
//             <h1>  useEffect Hook</h1>
//             <p>Count : {count}</p>
//             <button onClick={() => setCount(count + 1)}> Increment </button>
//         </div>
//     );
// };

// ====================== for date and time ===========================

// Since we know that , deals with the external data , useEffect are use .


import {useEffect, useState} from "react";
import "./index.css";

export const ReactUseEffect = () =>{
    const[date , setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString(date));
        } , 1000);
    } ,[]);

    return(
        <div className="container effect-container">
            <h1> Time : {date} </h1>
       
        </div>
    );
};