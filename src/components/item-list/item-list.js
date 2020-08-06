import React from 'react';
import './item-list.scss'
import Filter from "../filter";
import ColTitle from "../col-title";
import Games from "../games";

const ItemList = props => {
    const {games, genreChange, filterChange, isPlayed, format, isPlayedChangeBtn, delGame} = props;

    return (
        <div className="item-list _bg-shadow">
            <Filter
                genreChange={genreChange}
                filterChange={filterChange}
                isPlayed={isPlayed}
                format={format}
            />
            <ColTitle/>
            <Games
                games={games}
                isPlayedChangeBtn={isPlayedChangeBtn}
                delGame={delGame}
            />
        </div>
    )

};

export default ItemList
