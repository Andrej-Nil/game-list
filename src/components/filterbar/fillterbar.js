import React from "react";
import './filterbar.scss'
import Search from "../search-panel";

const Filterbar = ({onSearchChange}) => {
    return(
        <div className='filterbar p-4 _shadow'>
            <Search
                onSearchChange={onSearchChange}
            />
        </div>
    )
};

export default Filterbar;
