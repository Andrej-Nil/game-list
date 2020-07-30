import React from "react";
import './games.scss'
import Game from "../game";

const Games = ({games}) => {
    function renderGames() {
        return games.map( (game, index) => {
            const {id} = game;
            return (
                <Game
                    key={id}
                    game={game}
                    index={index}
                />
            )
        })
    }

    const gameList = renderGames();
    return (
        <div className='games'>
            {gameList}
        </div>
    )
};

export default Games;
