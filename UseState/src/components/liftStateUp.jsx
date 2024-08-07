// import {useState} from "react";
// export const LiftingState=()=>{
//     return (
//     <>
//      <InputComponent/>
//      <DisplayComponent/>
//     </>
//     );
// };
// const InputComponent =()=>{
//     const[inputvalue , setInputValue] = useState("");
//     return(
//         <>
//          <input type="text" placeholder="Enter your Name" value={inputvalue} onChange={(e)=>setInputValue(e.target.value)} />
//         </>
//     );
// };
// const DisplayComponent =()=>{
    
//     return <p>The current input values is :</p>;
// };

// ======================================== Same code given below in the form of liftState up ==========================

import {useState} from "react";
export const LiftingState=()=>{
    const[inputValue , setInputValue] = useState("");
    return (
    <>
     <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
     <DisplayComponent inputValue={inputValue} />
    </>
    );
};
const InputComponent =({inputValue , setInputValue})=>{

    return(
        <>
         <input type="text" placeholder="Enter your Name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </>
    );
};
const DisplayComponent = ({inputValue})=>{
    
    return <p>The current input values is :{inputValue} </p>;
};
