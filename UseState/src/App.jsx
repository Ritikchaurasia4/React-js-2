import {DerivedState} from "./components/DerivedState";
import "./components/EV.css";
// import {State} from "./components/hooks";
export const App =()=>{
  return (
      <section>
        <h1></h1>
        {/* <State/> */}
        {/* <Sibling/> */}
        <DerivedState/>
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