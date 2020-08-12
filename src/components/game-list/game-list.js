import React from "react";
import './game-list.scss'
import AddGame from "../add-game";
import ItemList from "../item-list";

const GameList = props => {
    const {games, addNewGame,
        genreChange, filterChange,
        isPlayed, format, error, loading,
        isPlayedChangeInState, delGameInState} = props;

    return (
        <div className='game-list'>
            <AddGame addNewGame={addNewGame}/>
            <ItemList
                games={games}
                genreChange={genreChange}
                error={error}
                loading={loading}
                filterChange={filterChange}
                isPlayed={isPlayed}
                format={format}
                isPlayedChangeInState={isPlayedChangeInState}
                delGameInState={delGameInState}
            />
        </div>
    )
};

export default GameList;
