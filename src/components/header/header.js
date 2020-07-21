import React from "react";
import './header.scss';
import HeaderLogo from "../header-logo";
import HeaderNav from "../header-nav";

const Header = () => {
    return (
        <div className='header _shadow' >
            <HeaderLogo />
            <HeaderNav />
        </div>
    )
};
export default Header;
