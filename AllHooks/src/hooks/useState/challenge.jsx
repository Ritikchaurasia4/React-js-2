
import {useState} from "react";
export const CounterChallenge = () =>{
    const[count , setCount] = useState(0);

    const[step , setStep] = useState(0);

   const handleIncrement = () =>{
    // setCount(count + 1);
       setCount(count + step);
   }

   const handleDecrement = () =>{
    // setCount( count -1);
       setCount( count -step);
   }

   const handleReset = () =>{
    setCount(0);
   }
    return( <div className="container state-container " style={{textAlign:"center"}}>
        <h1>useStateHook Challenge</h1>
        
       
        <p>Count: <span>{count}</span></p>
        <div>
           <label htmlFor="">Step:
              <input type="number" value={step} onChange={(event) =>setStep(Number(event.target.value))}/>  
           </label>
        </div>
        <br />
        <br />
        <div className="greed-three-cols">
            <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
            <button onClick={handleDecrement} disabled={count <= 0}>Decrement </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
   );
};