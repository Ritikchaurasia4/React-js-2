// export const ErrorPage = () =>{
//     return <h1>  404 Error page </h1>;
// };

// We can also handle the error using hook ,For this  the code are given below ......................


import {useRouteError} from "react-router-dom";
import { NavLink } from "react-router-dom"; 

export const ErrorPage = () =>{

    const error = useRouteError();
    console.log(error);
    
    if(error.status === 404){
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 error" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a"> The page could not be found </p>
                        <p className="p-b"> .. Back to Previous  page </p>
                    </div>
                </div>

                <NavLink to="/" className="btn">
                    Go Bak to Home page 
                </NavLink>

            </section>
        );

    }

    

    return <h1> The page you are looking does not exist </h1>;
};