import {createBrowserRouter , RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Movie} from "./pages/Movie";

export const App = () => {

const router = createBrowserRouter([
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
    element : <Movie/>

  },
  {
    path : "/contact" ,
    element : <Contact/>

  },
]);

  return (
    <>
      <h1> Hello react Router </h1>
      <RouterProvider router={router}/>
    </>
  );
};