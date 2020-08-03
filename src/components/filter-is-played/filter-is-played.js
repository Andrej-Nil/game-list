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
        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = name === 'all';
            const cls = isActive ? 'btn-primary' : 'btn-secondary';
            return (
                <buttom
                    kay={name}
                    type='button'
                    className={`btn ${cls}`}
                >
                    {label}
                </buttom>
            )
        });
        return (
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                {buttons}
            </div>
        )
    }
};


