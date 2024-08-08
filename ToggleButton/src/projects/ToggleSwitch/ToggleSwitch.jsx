// import {useState} from "react";
// import "./ToggleSwitch.css";
// export const ToggleSwitch =()=>{
//     const[isOn , setIsOn] = useState(false);

//     const handleToggleSwitch =()=>{
//         setIsOn(!isOn);
//     }

//     return(
//         <div className="toggle-switch" style={{backgroundColor : isOn ? "#4caf50" : ""}} onClick={handleToggleSwitch}>
            
//             {/*------------------ Template literals ---------------- */}

//             <div className={`switch ${isOn ? "on" : "off"}`}>
//              
//                 <span className="switch-state">{isOn ? "on" : "off"}</span>
//             </div>
//         </div>
//     );
// };

// -------------------------------- or , --------------------------------------------------------

import {useState} from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch =()=>{
    const[isOn , setIsOn] = useState(false);

    const handleToggleSwitch =()=>{
        setIsOn(!isOn);
    }
    
    const clickCheck = isOn ? "on" : "off";

    const styleBack = {backgroundColor : isOn ? "#4caf50" : ""};

    return(
        <div className="toggle-switch" style={styleBack} onClick={handleToggleSwitch}>
            
            {/*------------------ Template literals ---------------- */}

            <div className={`switch ${clickCheck}`}>
                
                <span className="switch-state">{clickCheck}</span>
            </div>
        </div>
    );
};