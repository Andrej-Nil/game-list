import React from "react";
import './filter.scss'
import Select from "../select";
import FilterFormat from "../filter-format";
import FilterIsPlayed from "../filter-is-played";

const Filter = ({select} ) => {
    return (
        <div className='filter'>
            <div className='filter-select'>
                <Select item={select}/>
            </div>
            <FilterIsPlayed/>
            <FilterFormat/>
        </div>
    )
};

export default Filter;
