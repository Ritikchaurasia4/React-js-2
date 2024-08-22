// ============================   useId() ==============================================

// useId is a react Hook for generating unique IDS that can be passed to accessibility attributes .
// useId does not take any parameter .
//useId should not be used to generate key in a list .


// import {useId} from "react";

// export const Useid = () =>{

//     const usernameId = useId();
//     const passwordId = useId();
//     const emailId = useId();

//     return(
//         <form>
//             <div>
//                 <label htmlFor={usernameId}>Usenname :</label>
//                 <input type="text" id={usernameId} name="name"  />
//             </div>

//             <div>
//                 <label htmlFor={passwordId}>Password :</label>
//                 <input type="password" id={passwordId} name="name"  />
//             </div>

//             <div>
//                 <label htmlFor={emailId}>Email:</label>
//                 <input type="email" id={emailId} name="email"  />
//             </div>

//             <div>
//                 <button type="submit">Submit</button>
//             </div>
//         </form>
//     );
// };

// ====================================== The above code does not follow the concept of ( don't repeat yourself ). =============================================

// ============================ The just above commented code can also be written as ----------------------------------

import {useId} from "react";

export const Useid = () =>{


   // This lets you avoid calling useId single element that needs a unique ID.
    
    const id = useId();

    return(
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>Usenname :</label>
                <input type="text" id={id + "usernameId"} name="name"  />
            </div>

            <div>
                <label htmlFor={id + "passwordId"}>Password :</label>
                <input type="password" id={id + "passwordId"} name="name"  />
            </div>
  
            <div>
                <label htmlFor={id + "emaiId"}>Email:</label>
                <input type="email" id={id + "emaiId"} name="email"  />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};