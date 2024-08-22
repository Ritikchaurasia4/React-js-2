// import { useContext } from "react";

// import { BioContext } from ".";

// export const Home = () =>{

//     const {myName , myAge} = useContext(BioContext);

//     return <h1>Hello Context API my name is {myName} , I am {myAge} year old.</h1>;
// };

// ============== When we create a custom Hook then we an re Write the above code as given below ================

import { useBioContext } from ".";

export const Home = () =>{

    const {myName , myAge} = useBioContext(); // We will pass only custom component here from index.jsx

    return <h1>Hello Context API my name is {myName} , I am {myAge} year old.</h1>;
};