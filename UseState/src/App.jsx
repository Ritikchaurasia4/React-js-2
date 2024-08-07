// import {DerivedState} from "./components/DerivedState";
// import {State} from "./components/hooks";
import {LiftingState} from "./components/liftStateUp";
import "./components/EV.css";
export const App =()=>{
  return (
      <section className="main-div">
      
        {/* <DerivedState/> */}
        {/* <State/> */}
        {/* <Sibling/> */}
        <LiftingState/>
      </section>
  );
};
/* function Sibling()
{
   console.log("Child component Rendered");
   return(
       <div className="main-div">
           <h1>Sibling Component</h1>
       </div>
   );
} */