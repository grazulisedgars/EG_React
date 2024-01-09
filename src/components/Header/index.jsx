import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"

function Header() {
    return (
        <nav className="navbar navbar-light">
            <a className="navbar-brand">EG</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                <div className="navbar-nav">
                    
                    <Link
                        to="/EG_React"
                        className={`nav-item nav-link ${location.pathname === "/EG_React" ? "active" : ""
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projectspage"
                        className={`nav-item nav-link ${location.pathname === "/projectspage" ? "active" : ""
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""
                            }`}
                    >
                        Contact
                    </Link>
                </div>
            {/* </div> */}
        </nav>
    );
}

export default Header;

