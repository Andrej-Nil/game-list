import React from "react";
import './games.scss'
import Game from "../game";
import NotFound from "../not-found";
import Loader from "../loader";

const Games = ({games, loading,
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

    const load = loading ? <Loader/> : null;
    const gameList = games ? renderGames() : null;
    const notFound = !games.length &&  loading === false ? <NotFound/> : null;
        return (
        <div className='games'>
            {gameList}
            {load}
            {notFound}


        </div>
    )
};

export default Games;
