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

    return (    

    <div className={`p-4 flex flex-col justify-center items-center h-lvh ${theme === "dark" ? "bg-gray-800" : "bg-white" } `}>

        <h2 className={`my-4 text-xl ${theme === "light" ? "text-gray-800" : "text-white"}`}>Dark light mode Website</h2>

        <p className={`my-4 text-l ${theme === "light" ? "text-gray-800" : "text-white"} ` }>Hello !! react ver19 fan 👍</p>

        <button onClick={handleToggleTheme} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"> {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} </button>
        
    </div>
    );
};