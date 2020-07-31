import React from "react";
import './games.scss'
import Game from "../game";

const Games = ({games, delGame}) => {
    function renderGames() {
        return games.map( (game, index) => {
            const {id} = game;
            return (
                <Game
                    key={id}
                    game={game}
                    index={index}
                    delGame={delGame}
                />
            )
        })
    }

    const gameList = games.length
        ? renderGames()
        : <div>
            <p>No Game</p>
        </div>;
    return (
        <div className='games'>
            {gameList}
        </div>
    )
};

export default Games;
