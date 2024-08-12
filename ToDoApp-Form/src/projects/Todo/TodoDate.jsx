import {useEffect ,useState} from "react";
export const TodoDate = () =>{
    const[dateTime , setDateTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString(); // If any data continuously change in react then we need useState.
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        } , 1000);

        return () => clearInterval(interval);
    
    } , []);
    return( <h1 className="date-time">{dateTime}</h1>);
};