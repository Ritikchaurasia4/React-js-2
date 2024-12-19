// // To get the value of API we use useLoader hook . useLoader provides the value returned from your route loader .

import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () =>{

    const moviesData = useLoaderData();
    console.log(moviesData);

    // return <h1> Movie Page</h1>;

    return <>
        <ul className="container grid grid-four-cols">

            {moviesData && moviesData.Search.map((curMovie) => {
                return <Card key={curMovie.imdbID} curMovie={curMovie}/> ;
            })}

        </ul>
    </>
};



