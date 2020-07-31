import React from "react";
import './game.scss'

const Game = ({game, index, delGame}) => {
    const {
        id, title, by, genre,
        year, format, isPlayed} = game;
    let icon = '';
    let isPlayedCls = '';
    switch (format) {
        case 'disk': {
            icon = '_disk';
            break;
        }
        case 'ps plus': {
            icon = '_ps-plus';
            break;
        }
        case 'hdd': {
            icon = '_hdd';
            break;
        }
        default: icon = '';
    }

    switch (isPlayed) {
        case 'Passed': {
            isPlayedCls = '_passed';
            break;
        }
        case 'Played': {
            isPlayedCls = '_played';
            break;
        }
        case 'No played': {
            isPlayedCls = '_no-played';
            break;
        }
        default: isPlayedCls = '';
    }
    return (
        <ul
            key={id}
            className="game-ul col-ul">
            <li
                className={`col-li _col-li1`}>
                <span>{index + 1}</span>
            </li>
            <li
                className={`col-li _col-li2`}>
                <span>{title}</span>
            </li>

            <li
                className={`col-li _col-li3`}>
                <span>{by}</span>
            </li>

            <li
                className={`col-li _col-li4`}>
                <span>{genre}</span>
            </li>

            <li
                className={`col-li _col-li5`}>
                <span>{year}</span>
            </li>

            <li
                className={`col-li _col-li6`}>
                        <span>
                            <i className={`format-icon ${icon}`}/>
                        </span>
            </li>

            <li
                className={`col-li _col-li7 _is-played`}>
                    <button className={`button-toggle ${isPlayedCls}`}>
                        {isPlayed}
                    </button>
            </li>

            <li
                className={`col-li _col-li8 _del-game`}>
                        <span
                            onClick={ () => delGame(id)}
                        >
                            <i className="fa fa-times del-game__icon" aria-hidden="true"/>
                        </span>
            </li>
        </ul>
    )
};

export default Game;
