import { NavLink } from "react-router-dom";
import "./Card.css";
export const Card = ({curMovie}) => {

    const {Poster , imdbID} = curMovie;

    return <>

        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container"> 
                    <img src={Poster} alt={imdbID} className="poster" />
                </div>
                <div className="ticket-container">
                    <div className="ticket_content">
                       <NavLink to={`/movie/${imdbID}`}>
                            <button className="ticket_buy-btn">Watch Now</button>
                       </NavLink>
                    </div>
                </div>
            </div>
        </li>

    </>
};