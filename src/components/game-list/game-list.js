import React, {Component} from "react";
import './game-list.scss'
import AddGame from "../add-game";

export default class GameList extends Component{
    state={
        inputs: [
            {label: 'Name game', type: 'text',},
            {label: 'Developers', type: 'text',},
            {label: 'Year', type: 'text',},
        ]
    };
    render() {
        return (
            <div className='game-list'>
                <AddGame />
            </div>
        )
    }

};
