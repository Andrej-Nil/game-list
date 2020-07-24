import React from "react";
import './game-card.scss';
import Button from "../iu/button";

const GameCard = ( {game: {name, by, img} } ) => {

    return (
        <article
            className='list-games-item g-card p-3 mb-4'
        >
            <a href="#!" className='g-card-link'>
                <img className='g-card__img' src={img} alt={name}/>
            </a>
            <h5 className='g-card__title'>
                {name}
            </h5>
            <span className='g-card__by'>
                        by {by}
                    </span>

            <Button type={null}
                    text='Add my list'
            />
        </article>
    )
};

export default GameCard;
