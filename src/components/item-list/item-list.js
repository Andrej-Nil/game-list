import React, {Component}  from 'react';
import './item-list.scss'
import Filter from "../filter";
import ColTitle from "../col-title";
import Games from "../games";

export default class ItemList extends Component{
    state = {
        columns: [
               {title: '№', id:1},
               {title: 'Title', id:2},
               {title: 'By', id:3},
               {title: 'Genre', id:4},
               {title: 'Year', id: 5},
               {title: 'Format', id:6},
               {title: 'Is played', id:7},
               {title: 'Del', id:8},
        ]
    };


    render() {
        const {columns} = this.state;
        const {games, genreChange, filterChange, isPlayed, format, isPlayedChangeBtn, delGame} = this.props;
        return (
            <div className="item-list _bg-shadow">
                <Filter
                    genreChange={genreChange}
                    filterChange={filterChange}
                    isPlayed={isPlayed}
                    format={format}
                />
                <ColTitle columns={columns}/>
                <Games
                    games={games}
                    isPlayedChangeBtn={isPlayedChangeBtn}
                    delGame={delGame}
                />
            </div>
        )
    }
}
