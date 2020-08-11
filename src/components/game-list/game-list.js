import React from "react";
import './game-list.scss'
import AddGame from "../add-game";
import ItemList from "../item-list";

const GameList = props => {
    const {games, addNewGame,
        genreChange, filterChange,
        isPlayed, format,
        isPlayedChangeBtn, delGameInState} = props;

    return (
        <div className='game-list'>
            <AddGame addNewGame={addNewGame}/>
            <ItemList
                games={games}
                genreChange={genreChange}
                filterChange={filterChange}
                isPlayed={isPlayed}
                format={format}
                isPlayedChangeBtn={isPlayedChangeBtn}
                delGameInState={delGameInState}
            />
        </div>
    )
};

export default GameList;
