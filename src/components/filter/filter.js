import React from "react";
import './filter.scss'
import Select from "../select";
import FilterFormat from "../filter-format";
import FilterProgress from "../filter-progress";

const Filter = ({select} ) => {
    return (
        <div className='filter'>
            <div className='filter-select'>
                <Select item={select}/>
            </div>
            <FilterProgress/>
            <FilterFormat/>
        </div>
    )
};

export default Filter;
