//============ using useState===========

// import {useState} from "react";
// export const ReducerComp = () =>{

//     const[count , setCount] = useState(0);

//     const handleDecrement = () =>{
//         setCount(count-1);
//     };

//  return (
//         <div>
//             <h1>Count :{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     );
// };


// ============================= Using of useREducer hook ===============================

import {useReducer} from "react";
export const ReducerComp = () =>{

    const reducer = ((state , action) => {
        console.log(state , action)
        if(action.type === "INCREMENT")
        {
            return state + 1;
        }
        if(action.type === "DECREMENT")
        {
            return state - 1;
        }
    });
    

    const[count , dispatch] = useReducer(reducer,0);
    // console.log(useReducer(reducer , 0));

    return (
        <div>
            <h1>Count :{count}</h1>

            {/* When we call the dispatch function then it will send an action to the reducer function */}

            <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
            <button  onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>  
        </div>
    );
};