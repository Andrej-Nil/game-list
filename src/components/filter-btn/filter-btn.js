import React from "react";
import './filter-btn.scss'

const FilterBtn = ({buttons, activeFilter, filterChange, typeFilter}) =>{

    function renderBtn() {
        return buttons.map( ({name, label}) => {
            const isActive = name === activeFilter;
            const cls = isActive ? 'btn-primary' : 'btn-secondary';
            return (
                <button
                    key={name}
                    type='button'
                    className={`filter-btn__item btn ${cls}`}
                    onClick={() => filterChange(name, typeFilter)}
                >
                    {label}
                </button>
            )
        });
    }

    const btnList = renderBtn();

    return (
        <div className="filter-btn btn-group btn-group-sm" role="group" aria-label="Basic example">
            {btnList}
        </div>
    )
};

export default FilterBtn;


