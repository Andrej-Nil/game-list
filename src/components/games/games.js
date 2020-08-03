import React from "react";
import './games.scss'
import Game from "../game";
import NotFound from "../not-found";

const Games = ({games, delGame, isPlayedChangeBtn}) => {
    function renderGames() {
        return games.map( (game, index) => {
            const {id} = game;
            return (
                <Game
                    key={id}
                    game={game}
                    index={index}
                    delGame={delGame}
                    isPlayedChangeBtn={isPlayedChangeBtn}
                />
            )
        })
    }

    const gameList = games.length
        ? renderGames()
        : <NotFound/>;
    return (
        <div className='games'>
            {gameList}
        </div>
    )
};

export default Games;
