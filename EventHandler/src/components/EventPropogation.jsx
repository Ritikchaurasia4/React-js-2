import  "./EV.css";

// export const EventPropogation = ()=>{
//     const handleGrandParentClick = ()=>{
//         console.log("GrandParent");
//     }
//     const handleParentClick =()=>{
//         console.log("Parent");
//     }
//     const handleChildClick =()=>{
//         console.log("Child");
//     }
//     return(
//         <section className="main-div">
//          <div className="g-div" onClick={handleGrandParentClick}>
//             <div className="p-div" onClick={handleParentClick}>
//                 <button className="c-div" onClick={handleChildClick}> 
//                     Child div
//                 </button>
//             </div>
//          </div>
//         </section>
//     );
// };
// export default EventPropogation;

// ---- The above code work bydefault bubbling phase(means The Event start propogation from the target element through its parent element and bubbles up to the root of the DOM) of Event Propogation ------------------

// If we want to stop event propogation only at child then we use stopPropogation() method . for this the code given below.--------------------------------------------------------------------------------------------------------------------------

// export const EventPropogation = ()=>{
//     const handleGrandParentClick = ()=>{
//         console.log("GrandParent");
//     }
//     const handleParentClick =()=>{
//         console.log("Parent");
//     }
//     const handleChildClick =(event)=>{
//         console.log(event);
//         console.log("Child");
//         event.stoptPropogation();
//     }
//     return(
//         <section className="main-div">
//          <div className="g-div" onClick={handleGrandParentClick}>
//             <div className="p-div" onClick={handleParentClick}>
//                 <button className="c-div" onClick={handleChildClick}> 
//                     Child div
//                 </button>
//             </div>
//          </div>
//         </section>
//     );
// };
// export default EventPropogation;

// ==============================================================================================================================

// Capturing phase : in Which the event start from the root of the Dom and goes down to the target element ..................

// The code for the Capturing phase are given below.......................
export const EventPropogation = ()=>{
    const handleGrandParentClick = ()=>{
        console.log("GrandParent");
    }
    const handleParentClick =()=>{
        console.log("Parent");
    }
    const handleChildClick =()=>{
        console.log("Child");
    }
    return(
        <section className="main-div">
         <div className="g-div" onClickCapture={handleGrandParentClick}>
            <div className="p-div" onClickCapture={handleParentClick}>
                <button className="c-div" onClickCapture={handleChildClick}> 
                    Child div
                </button>
            </div>
         </div>
        </section>
    );
};
// export default EventPropogation;