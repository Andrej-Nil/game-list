import React from "react";
import './filter-btn.scss'

const FilterFormat = props => {
    return (
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Disk</button>
            <button type="button" className="btn btn-secondary">Digital</button>
            <button type="button" className="btn btn-secondary">Ps plus</button>
        </div>
    )
};

export default FilterFormat;
