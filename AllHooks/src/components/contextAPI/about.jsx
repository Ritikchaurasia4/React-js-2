import { useContext } from "react";

import { BioContext } from ".";

export const About = () =>{

    const {myName , myAge} = useContext(BioContext);

    return <h1>Hello Context API (About) my name is {myName} , I am {myAge} year old.</h1>;
};