import React from "react";
import './header-nav.scss';

const HeaderNav = () => {
    return(
        <nav className="header-nav nav col-2">
            <a className="header-nav__link nav-link active" href="#!">Home</a>
            <a className="header-nav__link nav-link" href="#!">My List</a>
            <a className="header-nav__link nav-link" href="#!">About</a>
        </nav>
    )
};


export default HeaderNav;
