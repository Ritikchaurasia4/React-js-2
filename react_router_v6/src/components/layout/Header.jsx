import { NavLink } from "react-router-dom";

export const Header = () => {

  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Chaurasia Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ChaurasiaCart</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>

            {/* Active link in react ,  first way...... */}


              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >
                  Home
                </NavLink>
              </li>

             {/* Active link in react , second way...... */}


              <li className="nav-item">
                <NavLink to="/about" style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>

              {/* Active link in react , third way...... */}


              <li className="nav-item">
                <NavLink to="movie" className="nav-link" style={getNavLinkStyle} >
                  movies
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } >
                  contact
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};