import React, {Component} from "react";
import './filter-is-played.scss'


export default class FilterIsPlayed extends Component{
    buttons= [
        {name: 'all', label: 'All'},
        {name: 'noPlayed', label: 'No played'},
        {name: 'played', label: 'Played'},
        {name: 'passed', label: 'Passed'},
    ];
    render() {
        const {isPlayedChange, isPlayedActive} = this.props;
        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = name === isPlayedActive;
            const cls = isActive ? 'btn-primary' : 'btn-secondary';
            return (
                <button
                    key={name}
                    type='button'
                    className={`played-btn btn ${cls}`}
                    onClick={() => isPlayedChange(name)}
                >
                    {label}
                </button>
            )
        });
        return (
            <div className="filter-is-played btn-group btn-group-sm" role="group" aria-label="Basic example">
                {buttons}
            </div>
        )
    }
};


