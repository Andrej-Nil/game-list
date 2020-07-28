import React, {Component}  from 'react';
import './item-list.scss'
import Filter from "../filter";

export default class ItemList extends Component{
    state = {
        select: [
            {options: 'action/RPG', id: 1},
            {options: 'action-adventure', id: 2},
            {options: 'survival horror', id: 3},
        ]
    };
    render() {
        return (
            <div className="item-list _bg-shadow">
                <Filter />
            </div>
        )
    }
}
