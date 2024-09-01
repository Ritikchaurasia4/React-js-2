import { createContext , useContext , useState } from "react";

export const Themecontext = createContext();

export const ThemeProvider = ({children}) =>{

    const[theme , setTheme] = useState("dark");

    const handleToggleTheme = () =>{
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return(
        <Themecontext.Provider value={{theme , handleToggleTheme}}>
            {children}
        </Themecontext.Provider>
    );
};

// creating a component

export const DarkLight = () =>{

    const {theme , handleToggleTheme} = useContext(Themecontext);

    return <div>
        <h2>Dark light mode Website</h2>
        <p>Hello !! react ver19 fan </p>
        <button onClick={handleToggleTheme}> {theme === "dark" ? "switch to light mode" : "switch to dark mode"} </button>
    </div>
};