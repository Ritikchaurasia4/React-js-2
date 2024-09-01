import "./index.css";
import {forwardRef, useRef , useId} from "react";
export const ForwardRefs = () =>{

    const username = useRef(null);
    const password = useRef(null);

    console.log(username);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(username.current.value , password.current.value);    
    }

    return (
        <form onSubmit={handleFormSubmit}> 

           {/* here , in Below code label are prosp . */}

           <BeforeReact19input label="username" ref={username}/>
           <BeforeReact19input label="password" ref={password}/>
           <button>Submit</button>
      
        </form>
    )
};

const BeforeReact19input = forwardRef((props , ref) => {
    const id = useId();
      return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <br />
            <input type="password" ref={ref} />
           

        </div>
      );
});

//===================================== after React version 19 ===========================================

// const BeforeReact19input = (props ) => {
//     const id = useId();
//       return(
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <br />
//             <input type="text" ref={props.ref} />
           

//         </div>
//       );
// };

// ================ or , =========================== The just above code can be written as ------------------

// const BeforeReact19input = ({label , ref} ) => {
//     const id = useId();
//       return(

//         <div>
//             <label htmlFor={id}>{label}</label>
//             <br />
//             <input type="text" ref={ref} />
//         </div>

//       );
// };

