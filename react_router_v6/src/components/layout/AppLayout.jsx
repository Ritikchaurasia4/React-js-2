import { Footer } from "./Footer";
import {Header} from "./Header";
import {Outlet , useNavigation} from "react-router-dom";

export const AppLayout = () =>{

  // The just below code i.e ( navigation ) is used to create loading , it means that whenever the actual data does not meet until we will show loading ...

    const Navigation = useNavigation();
    console.log(Navigation);

    if(Navigation.state === "loading") return <Loading/> ;

    return <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
};