import { useEffect , useState } from "react";
import {PokemonCards} from "./PokemonCards";
import "./index.css";
export const Pokemon = () =>{

   const[pokemon , setPokemon] = useState([]);
   const[loading , setLoading] = useState(true);
   const[error , setError] = useState(null);
   const[search , setSearch] = useState("");


    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async() =>{
        try{
              const res = await fetch(API);
              const data = await res.json();
            //   console.log(data);

              const detailedPokemonData = data.results.map(async(curPokemon) => {
                // console.log(curPokemon.url);

                const res = await fetch(curPokemon.url);
                const data = await res.json();
                // console.log(data);
                return data;
              });
            //   console.log(detailedPokemonData);
              const detailedResponses = await Promise.all(detailedPokemonData);
              console.log(detailedResponses);
              setPokemon(detailedResponses);
              setLoading(false);
             
        } 
        catch(error){
              console.log(error);
              setLoading(false);
              setError(error);
              
        }
    };
     useEffect(()=>{

        fetchPokemon();

     },[]);

     // Search functionality ---------------------------------------------------------------

     const searchData = pokemon.filter((curpokemon) => curpokemon.name.toLowerCase().includes(search.toLowerCase()));
 
     if(loading){
      return (
      <div>
        <h1>Loading.....</h1>
      </div>
      );
     }
    
     if(error)
      return(
      <div>
       <h1>Error : {error.message}</h1>
     </div>
    );
     
    const handleSearch = (event) =>{
       return setSearch(event.target.value);
       
    }

     return <>
         <section className="container">
            <header>
              <h1> lets catch pokemon </h1>;
            </header>
            <div className="pokemon-search">
              <input type="text" placeholder="search pokemon" value={search} onChange={handleSearch}/>
            </div>
            <div>
                <ul className="cards">
                    {searchData.map((curPokemon) => {
                            // <li key={curPokemon.id}>{curPokemon.height}</li>
                            return <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
                        })
                    }
                </ul>
            </div>
         </section>
       </>
    
   
}