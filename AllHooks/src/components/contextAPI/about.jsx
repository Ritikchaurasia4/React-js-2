// import { useContext } from "react";

// import { BioContext } from ".";

// export const About = () =>{

//     const { myAge} = useContext(BioContext);

//     return <h1> I am a full stack Developer (About). </h1>;
// };

// ===================== ==========================



// import {  useBioContext } from ".";

// export const About = () =>{

//     const {myAge} = useBioContext();

//     return <h1> I am a full stack Developer (About). {myAge} </h1>;
// };

// =======================================================

import {  BioContext, use } from ".";

export const About = () =>{

    const {myAge} = use(BioContext)

    return <h1> I am a full stack Developer (About). {myAge} </h1>;
};