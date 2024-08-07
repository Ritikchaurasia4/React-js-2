//  const users = [
//     {name:"Ritik" , age:21},
//     {name:"Rahul" , age:26},
//     {name:"Shubham" , age:15},
//     {name:"Dheeraj" , age:17},
// ];
// export const DerivedState = ()=>{
   
//     return(
//         <div className="main-div">
//             <h1>UserList</h1>
//             <ul>
//                 {users.map((curElem , index) =>{
//                     return(
                        
//                          <li key={index}>
//                             {curElem.name} - {curElem.age} years old
//                          </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// ============================================================================================================

// -------------------- Using hook i.e useState -------------------------------------------------------------------

import {useState} from "react";
// const users = [
//     {name:"Ritik" , age:21},
//     {name:"Rahul" , age:26},
//     {name:"Shubham" , age:15},
//     {name:"Dheeraj" , age:17},
// ];
export const DerivedState = ()=>{
    const[users , setUsers] = useState([
        {name:"Ritik" , age:21},
        {name:"Rahul" , age:26},
        {name:"Shubham" , age:15},
        {name:"Dheeraj" , age:17},
    ]);
   console.log(users);

   // When we create a variable that value is totally dependent upon state variable or props (that are pass in main component) then thats perticular variable is said to be derivedState variable . in below code usersCount is a derivedState variable.
   
   // Derived state: count of users
   const usersCount = users.length;  
   
   // derived state: average of age of users
   const averAgeAge = (users.reduce((accum , curElem) => accum + curElem.age , 0))/usersCount;

    return(
        <div className="main-div">
            <h2>hello</h2>
            <h1>UserList</h1>
            <ul>
                {users.map((curElem , index) =>{
                    return(
                        
                         <li key={index}>
                            {curElem.name} - {curElem.age} years old
                         </li>
                    );
                })}
            </ul>
            <p>Total Users : {usersCount}</p>
            <p>Average: {averAgeAge}</p>
        </div>
    );
}