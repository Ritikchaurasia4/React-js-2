// export const State = ()=>{
//    let value = 0;
//     const handleButton =()=>{
//         value++;  // Never Used in Reactjs
//         console.log(value);
//     }
//     return(
//         <>
//         <section className="main-div">
//             <h1>{value}</h1>
//             <button onClick={handleButton}>Increment</button>
//         </section>
//         </>
//     );
// };



// In Above code -------------------
// React does not know the normal variable , thats it going to be changed .
// And that react should respond or update DOM based on that . Those values always rendered in DOM , There is no away they will be re-rendered . 
// A normal variable does not work in ReactJs .

// To resolve this we use useState in react


// =========================================================================================================================

import { useState } from "react";
export const State = ()=>{

//    let array = useState();
//    console.log(array);

   const [count , setCount] = useState(0);
   console.log("Parent component rendered")
   const handleButtonClick =()=>{
    setCount(() => count + 1);
   }

    return(
         <>
         <div className="main-div">
            
             <h1>{count}</h1>
             <button onClick={handleButtonClick}>Increment</button>
         </div>
         {/* <ChildComponent/> */}
         <ChildComponent count={count}/>
        
         </>
     );
 };
//  function ChildComponent()
//  {
//     console.log("Child component Rendered");
//     return(
//         <div className="main-div">
//             <h1>Child Component</h1>
//         </div>
//     );
//  }
function ChildComponent({count})
{
   console.log("Child component Rendered");
   return(
       <div className="main-div">
           <h1>Child Component - {count}</h1>
       </div>
   );
}

