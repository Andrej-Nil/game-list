import React from "react";
import './header.scss';
import HeaderLogo from "../header-logo";
import SearchPanel from "../search-panel";

const Header = () => {
    return (
        <div className='header _shadow' >
            <HeaderLogo />
            <SearchPanel />
        </div>
    )
};
export default Header;
