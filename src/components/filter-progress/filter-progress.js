import React from "react";
import './filter-progress.scss'


const FilterProgress = props => {
    return (
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">In progress</button>
            <button type="button" className="btn btn-secondary">Completed</button>
        </div>
    )
};

export default FilterProgress;
