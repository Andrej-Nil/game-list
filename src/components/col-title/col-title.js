import React, {Component} from "react";
import './col-title.scss';

export default class ColTitle extends Component{
    columns = [
        {title: '№', id:1},
        {title: 'Title', id:2},
        {title: 'By', id:3},
        {title: 'Genre', id:4},
        {title: 'Year', id: 5},
        {title: 'Format', id:6},
        {title: 'Is played', id:7},
        {title: 'Del', id:8},
    ];

    renderItem() {
        return this.columns.map( (item) => {
            const {title, id} = item;
            return(
                <li
                    key={id}
                    className={`header-col-li col-li _col-li${id} _li-align-center`}>
                    <span>{title}</span>
                </li>
            )
        })
    }
    render() {
        const columnsEl = this.renderItem();
        return (
            <div className='col-title'>
                <ul className='col-title-ul col-ul'>
                    {columnsEl}
                </ul>
            </div>
        )
    };
}

