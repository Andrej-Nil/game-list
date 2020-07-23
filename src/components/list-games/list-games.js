import React from "react";
import './list-games.scss'
import Button from "../iu/button";

const ListGames = ({games}) => {
    function renderGameList() {
        return games.map( (item) => {
            const {name, by, img, id} = item;
            return(
                <article
                    key={id}
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

                    <Button
                        text='Add my list'
                    />


                </article>
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
