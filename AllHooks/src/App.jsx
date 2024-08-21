// import {Counter} from "./hooks/useState/index";

// import {CounterChallenge} from "./hooks/useState/challenge";

// import ControlledForm from "./hooks/useState/controlled";

// import {RegistrationForm} from "./hooks/useState/Registration";

// import {ReactUseEffect} from "./hooks/useEffect/index";

// import {Challange} from "./hooks/useEffect/EffectChallenge";

// import {CleanUp} from "./hooks/useEffect/CleanUp";

// import { HowToFetchApi } from "./hooks/useEffect/HowToFetchApi";

// import {UseRef} from "./hooks/useRef/index.jsx";

// import {ForwardRefs} from "./hooks/useRef/forwardRef";

// import {Useid} from "./hooks/useId/index";

// import {PropDrilling} from "./components/propDrilling.jsx";

import { BioProvider  } from "./components/contextAPI";
import { About } from "./components/contextAPI/about";

import { Home } from "./components/contextAPI/Home";

export const App = () =>{
  return (
    <>
        {/* <CounterChallenge/> */}

        {/* <ControlledForm/> */}
        
        {/* <RegistrationForm/> */}

        {/* <ReactUseEffect/> */}

        {/* <Challange/> */}

        {/* <CleanUp/> */}

        {/* <HowToFetchApi/> */}

        {/* <UseRef/> */}

        {/* <Useid/> */}

        {/* <PropDrilling/> */}
        
        <BioProvider>
          <Home/>
          <About/>
        </BioProvider>
     </>
        
  );
};