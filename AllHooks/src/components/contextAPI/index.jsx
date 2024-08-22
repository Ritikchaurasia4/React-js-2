// ============================= context API ==================================================================

import {createContext} from "react";

import { useContext } from "react";

// When we create a variable with the help of createContext() then that variable work as a Component in Reactjs . Hence BioContext workas a component. First letter of the variable must be Uppercase.

// 1 Step
export const BioContext = createContext();

// 2 Step : We make a Provider component , and we paas the data in Provider component.

// When we pass Home component inside the BioProvider component then in just below code in given paranthesis we need to write the children inside curly.

export const BioProvider = ({children}) =>{

    // For Single Data there is no need of curly braces.

    // const myName = "Ritik Chaurasia";

       const myName = "Ritik Chaurasia";

       const myAge = 21;


    // return <BioContext.Provider value={myName}> {children} </BioContext.Provider>;

    return (
        <BioContext.Provider value={{myName , myAge}}> 
            {children} 
        </BioContext.Provider>
    );
};

// ========================= Custom Hook ===============================

export const useBioContext = () =>{
    const context = useContext(BioContext);
    if(context === undefined)
    {
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
};