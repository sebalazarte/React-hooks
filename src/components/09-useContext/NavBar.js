import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">
            useContext
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
           </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink 
                        exact activeClassName="active" 
                        className="nav-link" 
                        to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            exact 
                            activeClassName="active" 
                            className="nav-link" 
                            to="/about">
                        About
                      </NavLink>
                    </li>
                  </ul>
                <NavLink 
                    exact 
                    activeClassName="active" 
                    className="btn btn-outline-info my-2 my-sm-0" 
                    to="/login">
                    Login
                  </NavLink>
                  <NavLink
                    exact 
                    activeClassName="active"
                    className="btn btn-outline-info my-2 my-sm-0 ml-3"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </div>
              </nav>
        
    );
}
