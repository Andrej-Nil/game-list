import React, {Component} from "react";
import './filter.scss'
import FilterBtn from "../filter-btn";
import FilterGenre from "../filter-genre";

export default class Filter extends Component{
    state= {
        isPlayedFilterBtn: [
            {name: 'all', label: 'All'},
            {name: 'noPlayed', label: 'No played'},
            {name: 'played', label: 'Played'},
            {name: 'passed', label: 'Passed'},
        ],

        formatFilterBtn: [
            {name: 'all', label: 'All'},
            {name: 'disk', label: 'Disk'},
            {name: 'hdd', label: 'Digital'},
            {name: 'psPlus', label: 'PS plus'},
        ],
    };
    render() {
        const {genreChange, isPlayed, format, filterChange} = this.props;
        const {isPlayedFilterBtn, formatFilterBtn} = this.state;
        return (
            <div className='filter'>
                <div className='filter-select'>
                    <FilterGenre
                        genreChange={genreChange}
                    />
                </div>
                <FilterBtn
                    typeFilter = 'isPlayed'
                    buttons={isPlayedFilterBtn}
                    filterChange={filterChange}
                    activeFilter={isPlayed}
                />
                <FilterBtn
                    typeFilter='format'
                    buttons={formatFilterBtn}
                    filterChange={filterChange}
                    activeFilter={format}
                />
            </div>
        )
    }

};


