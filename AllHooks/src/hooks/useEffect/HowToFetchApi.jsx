// import "./Pokemon.css";
// import { useEffect, useState } from "react";

// export const HowNotToFetchApi = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

//   //   const fetchPokemon = () => {
//   //     fetch(API)
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         setPokemon(data);
//   //         setLoading(false);
//   //       })
//   //       .catch((error) => {
//   //         console.log(error);
//   //         setError(error);
//   //         setLoading(false);
//   //       });
//   //   };

//   const fetchPokemon = async () => {
//     try {
//       const res = await fetch(API);
//       const data = await res.json();
//       setPokemon(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setError(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPokemon();
//   }, []);

//   console.log(pokemon);

//   if (loading)
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );

//   if (error)
//     return (
//       <div>
//         <h1>Error: {error.message} </h1>
//       </div>
//     );

//   //   if (pokemon) {
//   return (
//     <section className="container">
//       <header>
//         <h1> Lets Catch Pokémon</h1>
//       </header>
//       <ul className="card-demo">
//         <li className="pokemon-card">
//           <figure>
//             <img
//               src={pokemon.sprites.other.dream_world.front_default}
//               alt={pokemon.name}
//               className="pokemon-image"
//             />
//           </figure>
//           <h1>{pokemon.name}</h1>
//           <div className="grid-three-cols">
//             <p className="pokemon-info">
//               Height: <span> {pokemon.height} </span>
//             </p>
//             <p className="pokemon-info">
//               Weight: <span> {pokemon.weight}</span>
//             </p>
//             <p className="pokemon-info">
//               speed: <span>{pokemon.stats[5].base_stat}</span>
//             </p>
//           </div>
//         </li>
//       </ul>
//     </section>
//   );
// };

// ===================================================================================================

import "./pokemon.css"

import {useState , useEffect} from "react";

export const HowToFetchApi = () =>{

  const[pokemon , setPokemon] = useState(null);

  const[loading , setLoading] = useState(true);

  const[error , setError] =useState(null);

  
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then((res)=>res.json())
  // .then((data)=>{
  //   // setPokemon(data)  We can not do this because there will be infinite loop and there are many request arrive , Hence we can not fetch Api 
  // })
  // .catch((error)=>console.log(error));

  // ======= We can fetch Api When we use useEffect ========================== The code is just given below

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //    setPokemon(data) 
  //  })
  // .catch((error)=>console.log(error));
  // } ,[]);

  // ============================================== The just Above code can also be written as ========================================


     const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';
//   const fetchPokemon = ()  =>{
//      fetch(API);
//     .then((res)=>res.json())
//     .then((data)=>{
//      setPokemon(data) 
//      setLoading(false);
//    })
//    .catch((error)=>{
//       console.log(error) ;
//       setError(error);
//       setLoading(false)
//     });
// }

// The just above commented code can also be written with the help of async await function 

 const fetchPokemon = async () => {
    try{
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data) 
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false); 
      setError(error);
      

    }
 };

  useEffect(() => {

    fetchPokemon();

  } ,[]);

  console.log(pokemon)

 if(loading)
   return(
   <div>
    <h1>Loading................</h1>
  </div>
 );
 
 if(error)
  return(
  <div>
   <h1>Error : {error.message}</h1>
 </div>
);
 
  return(
    // <div className="container effect-container">
    //   <ul>
    //     Data:
    //     {
    //       pokemon.map((curData) =>{
    //       return(<li key={curData.id}> {curData.title} </li>)
    //     })
    //     }
    //   </ul>
    // </div>

    <section>
      <header>
        <h1>Lets catch Pokemon </h1> 
      </header>
      
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-image" />
          </figure>
          <h1>{pokemon.name}</h1>
          
          <div className="grid-three-cols">

            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>

            <p className="pokemon-info">
              Weight: <span> {pokemon.weight} </span>
            </p>

            <p className="pokemon-info">
              Speed: <span> {pokemon.stats[5].base_stat} </span>
            </p>
            
          </div>
        </li>
      </ul>
    </section>
  );
};