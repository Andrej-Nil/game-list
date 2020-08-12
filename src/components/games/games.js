import React from "react";
import './games.scss'
import Game from "../game";
import NotFound from "../not-found";

const Games = ({games, error, loading,
                   delGameInState, isPlayedChangeInState}) => {
    function renderGames() {
        return games.map( (game, index) => {
            const {id} = game;
            return (
                <Game
                    key={id}
                    game={game}
                    index={index}
                    delGameInState={delGameInState}
                    isPlayedChangeInState={isPlayedChangeInState}
                />
            )
        })
    }
    const load = loading ? 'loading' : null;
    const gameList = games ? renderGames() : null;
    const test = error ? 'test' : null;


        return (
        <div className='games'>
            {gameList}
            {load}
            {test}
        </div>
    )
};

export default Games;
