import "./Hooks.css";
import {useState} from "react";
export const ShortCircuitExample = () =>{
   const[isLoggedIn , setIsLoggedIn] = useState(true);
   const[user , setUser] = useState(""); 
    return (
      <section className="container short-container">
         <h1> Welcome to Short circuit evaluation</h1>
         { isLoggedIn && <p>You are logged in</p>}
         { user ? `Hello ${user}` :"please login!" }
         <div className="grid-three-cols">

            {/* Here in just below code the data is changing hence useState wxill be apply */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn) }>Toggle login State</button> 

             {/* Here in just below code , again data is changing hence useState will be apply */}
            <button onClick={() => setUser("Ritik Chaurasia")}>Set User</button>
            <button onClick={() => setUser("")}>Clear User</button>
         </div>
      </section>
    );
};
// export default shortCircuitExample;