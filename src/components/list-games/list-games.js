import React from "react";
import './list-games.scss'
import GameCard from "../game-card";

const ListGames = ({games}) => {
    console.log(games)
    function renderGameList() {
        return games.map( (item) => {
            const {id} = item;
            return(
                <GameCard
                    key={id}
                    game={item}/>
            )
        })
    }
    return(
        <div className='list-games p-4 _shadow'>
            {renderGameList()}
        </div>
    )
};

export default ListGames;
