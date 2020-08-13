import React from 'react';
import './item-list.scss'
import Filter from "../filter";
import ColTitle from "../col-title";
import Games from "../games";

const ItemList = props => {
    const {games, genreChange,
        filterChange, isPlayed, format, error, loading,
        isPlayedChangeInState, delGameInState} = props;

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
                error={error}
                games={games}
                loading={loading}
                isPlayedChangeInState={isPlayedChangeInState}
                delGameInState={delGameInState}
            />
        </div>
    )

};

export default ItemList
