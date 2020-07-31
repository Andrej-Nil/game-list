import React from "react";
import './filter-is-played.scss'


const FilterIsPlayed = props => {
    return (
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">No played</button>
            <button type="button" className="btn btn-primary">Played</button>
            <button type="button" className="btn btn-secondary">Passed</button>
        </div>
    )
};

export default FilterIsPlayed;
