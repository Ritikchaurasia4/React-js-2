// export const ErrorPage = () =>{
//     return <h1>  404 Error page </h1>;
// };

// ........................... We can also handle the error using hook ,For this  the code are given below ......................


import {useRouteError} from "react-router-dom";
// import { NavLink } from "react-router-dom"; 

import { useNavigate } from "react-router-dom";     // This state always return a function

export const ErrorPage = () =>{

    const error = useRouteError();
    console.log(error);

    // ... useNavigate always return a function , and (useNavigate is used when we type wrong url in the search engine ) then  It helps to go to the specific URL, forward or backward pages. In the updated version . means go back just previous page not directly at Home  page . ( just below the code )

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    
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

                {/* ------------- When we use Navlink (just below commented code) then we will go directly on Home page always -----------------  */}

                {/* <NavLink to="/" className="btn">
                    Go Bak to Home page 
                </NavLink> */}

                <button className="btn" onClick={handleGoBack}>
                    Go Back
                </button>   

            </section>
        );

    }

    return <h1> The page you are looking does not exist </h1>;
};