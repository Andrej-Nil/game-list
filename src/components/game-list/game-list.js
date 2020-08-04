import React, {Component} from "react";
import './game-list.scss'
import AddGame from "../add-game";
import ItemList from "../item-list";

export default class GameList extends Component{
    state={
        form: {
            inputs: [
                { type: 'text', placeholder: 'Name game', name:'nameGame', id: 1},
                { type: 'text', placeholder: 'Developers', name:'developers', id: 2},
                { type: 'text', placeholder: 'Year', name:'year', id: 3},
            ],

            selects: [
                {
                    label: 'Select genre',
                    options: [
                        {
                            option: 'action/RPG',
                            id: 1
                        },
                        {
                            option:'action-adventure',
                            id: 2
                        },
                        {
                            option: 'survival horror',
                            id: 3
                        }
                    ],
                    id: 1,
                },

                {
                    label: 'Select format',
                    options: [
                        {
                            option: 'disk',
                            id: 1
                        },
                        {
                            option: 'hdd',
                            id: 2
                        },
                        {
                            option: 'ps plus',
                            id: 3
                        }
                    ],
                    id: 2,
                },
            ]
        }
    };
    render() {
        const {form} = this.state;
        const {games, genreChange, filterChange, isPlayed, format, isPlayedChangeBtn,  delGame} = this.props;
        return (
            <div className='game-list'>
                <AddGame form={form}/>
                <ItemList
                    games={games}
                    genreChange={genreChange}
                    filterChange={filterChange}
                    isPlayed={isPlayed}
                    format={format}
                    isPlayedChangeBtn={isPlayedChangeBtn}
                    delGame={delGame}
                />
            </div>
        )
    }
};
