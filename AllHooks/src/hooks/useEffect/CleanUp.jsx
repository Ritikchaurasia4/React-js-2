import { FaInstagram } from "react-icons/fa";
import {useState , useEffect} from "react";
import "./index.css";
export const CleanUp = () =>{
   const[count , setCount] = useState(0);

//    useEffect(() => {
//      setInterval(() =>{
//         setCount((prev) => prev + 1);
//        },1000);
//     },[]);

   // From just Above comment line code  the previous value does not take of its actual value hence the counter is incremented by 2 . To resolve this problem we use cleanUp , that show in just below code .

   useEffect(() => {
    const timer = setInterval(() =>{
       setCount((prev) => prev + 1);
      },1000);

    return() => clearInterval(timer);     // CleanUp function

   },[]);

    return(
    <div className="container">
        <div className="counter">
            <p>My followers on Instagram <FaInstagram /></p>
            <div className="odometer" id="odometer">
                {count}
            </div>
            <h3 className="title">
                Followers <br /> Realtime Counter
            </h3>
        </div>
    </div>
    );
};