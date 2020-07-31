import React, {Component}  from 'react';
import './item-list.scss'
import Filter from "../filter";
import ColTitle from "../col-title";
import Games from "../games";

export default class ItemList extends Component{
    state = {
        select: {
            label: 'Select genre',
            options: [
                {option: 'all', id: 1},
                {option: 'action/RPG', id: 2},
                {option: 'action-adventure', id: 3},
                {option: 'survival horror', id: 4},
            ]
        },

        columns: [
               {title: '№', id:1},
               {title: 'Title', id:2},
               {title: 'By', id:3},
               {title: 'Genre', id:4},
               {title: 'Year', id: 5},
               {title: 'Format', id:6},
               {title: 'Is played', id:7},
               {title: 'Del', id:8},
        ]
    };


    render() {
        const {select, columns} = this.state;
        const {games, delGame} = this.props;
        return (
            <div className="item-list _bg-shadow">
                <Filter select={select}/>
                <ColTitle columns={columns}/>
                <Games
                    games={games}
                    delGame={delGame}
                />
            </div>
        )
    }
}
