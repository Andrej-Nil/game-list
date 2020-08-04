import React from "react";
import './game.scss'

const Game = ({
                  game,
                  index,
                  delGame,
                  isPlayedChangeBtn,
              }) => {
    const {
        id, title, by, genre,
        year, format, isPlayed} = game;
    let icon;
    let label;
    let isPlayedCls;
    switch (format) {
        case 'disk': {
            icon = '_disk';
            break;
        }
        case 'psPlus': {
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
        case 'passed': {
            isPlayedCls = '_passed';
            label = 'Passed';
            break;
        }
        case 'played': {
            isPlayedCls = '_played';
            label = 'Played';
            break;
        }
        case 'noPlayed': {
            isPlayedCls = '_no-played';
            label = 'No played';
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
                    <button
                        onClick={() => isPlayedChangeBtn(id)}
                        className={`button-toggle ${isPlayedCls}`
                        }>
                        {label}
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
