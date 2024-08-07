import NetflixSeries from "./Components/netflix";
// import "./Components/Netflix.css";

import "./Components/ritik.module.css";
const App =()=>{
    return(
        <section className="container">
            <h1 className="card-heading"> List of Best <font style={{color:"red"}}>Netflix </font>series </h1>
            <NetflixSeries/>
        </section>
    ) 
    
}
export default App;

 
