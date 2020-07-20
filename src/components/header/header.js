import React from "react";
import './header.scss';
import HeaderLogo from "../header-logo";
import HeaderNav from "../header-nav";

const Header = () => {
    return (
        <div className='header row col-11 shadow-lg' >
            <HeaderLogo />
            <HeaderNav />
        </div>
    )
};
export default Header;
