// import {createBrowserRouter , RouterProvider , Route , createRoutesFromElements } from "react-router-dom";
// import {Home} from "./pages/Home";
// import {About} from "./pages/About";
// import {Contact} from "./pages/Contact";
// import {Movie} from "./pages/Movie";

// export const App = () => {

// // This below code is the old way to create route .

// const router = createBrowserRouter(
  
// createRoutesFromElements(
//   <Route>
//       <Route path="/" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="movie" element={<Movie/>}/>
//   </Route>
// )

// );

//   return (
//     <>
//       <h1> Hello react Router </h1>
//       <RouterProvider router={router}/>
//     </>
//   );
// };



// ============================= The just Above commented code can also be written as  , and We recommended the below code ===========================

// import {createBrowserRouter , RouterProvider} from "react-router-dom";
// import {Home} from "./pages/Home";
// import {About} from "./pages/About";
// import {Contact} from "./pages/Contact";
// import {Movie} from "./pages/Movie";

// export const App = () => {

// const router = createBrowserRouter([
//   {
//     path : "/" ,
//     element : <Home/>

//   },
//   {
//     path : "/about" ,
//     element : <About/>

//   },
//   {
//     path : "/movie" ,
//     element : <Movie/>

//   },
//   {
//     path : "/contact" ,
//     element : <Contact/>

//   },
// ]);

//   return (
//     <>
//       <h1> Hello react Router </h1>
//       <RouterProvider router={router}/>
//     </>
//   );
// };

// =========================================================================================================

import {createBrowserRouter , RouterProvider} from "react-router-dom";

import "./App.css";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Movie} from "./pages/Movie";
import {AppLayout} from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import {GetMoviesData} from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { GetMovieDetails } from "./api/GetMovieDetails";

export const App = () => {

const router = createBrowserRouter([

  
  // {
  //   path:"/" ,
  //   element:<AppLayout/>
  // } ,

  // {
  //   path : "/" ,
  //   element : <Home/>

  // },
  // {
  //   path : "/about" ,
  //   element : <About/>

  // },
  // {
  //   path : "/movie" ,
  //   element : <Movie/>

  // },
  // {
  //   path : "/contact" ,
  //   element : <Contact/>

  // },

  // From the just above commented code , We we get one pages at a time only , But if we want to get all the pages inside the Header and Footer pages then for this the code is given below . Here we create a children object and all the code put inside the children . 👍


  {
    path:"/" ,
    element:<AppLayout/>,

    children : [

        {
          path : "/" ,
          element : <Home/>
      
        },
        {
          path : "/about" ,
          element : <About/>
      
        },
        {
          path : "/movie" ,
          element : <Movie/>,
          loader : GetMoviesData ,
        },

        // Here The jsut above code i.e ( Movie components) , We make Dynamic Hence We Have the code for this ....  
        // ==== Create Dynamic route in the just below code , in Below movieID is a dynamic value .

        {
          path : "/movie/:movieID" ,
          element : <MovieDetails/>,
          loader : GetMovieDetails ,
        },
 
        {
          path : "/contact" ,
          element : <Contact/>
      
        },
      
    ],
    
  //  Error Handling ................... 
   errorElement : <ErrorPage/> ,


  } ,

]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};