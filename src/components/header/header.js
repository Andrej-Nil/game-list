import React from "react";
import './header.scss';
import HeaderLogo from "../header-logo";
import SearchPanel from "../search-panel";

const Header = ({searchChange}) => {
    return (
        <div className='header _bg-shadow' >
            <HeaderLogo />
            <SearchPanel
                searchChange={searchChange}
            />
        </div>
    )
};
export default Header;
