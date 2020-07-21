import React from "react";
import './header-logo.scss'

const HeaderLogo = () => {
    return (
        <div className='header-logo'>
            <span >GameList</span>
            <i className="fa fa-gamepad header-logo__i" aria-hidden="true"/>
        </div>
    )
};

export default HeaderLogo;
