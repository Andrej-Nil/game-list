import React from "react";
import './game-list.scss'
import AddGame from "../add-game";
import ItemList from "../item-list";

const GameList = props => {
    const {games, genreChange, filterChange, isPlayed,
        format, isPlayedChangeBtn, delGame} = props;

    return (
        <div className='game-list'>
            <AddGame/>
            <ItemList
                games={games}
                genreChange={genreChange}
                filterChange={filterChange}
                isPlayed={isPlayed}
                format={format}
                isPlayedChangeBtn={isPlayedChangeBtn}
                delGame={delGame}
            />
        </div>
    )
};

export default GameList;
