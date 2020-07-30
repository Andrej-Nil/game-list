import React from "react";
import './col-title.scss';

const ColTitle = ({columns}) => {
    function renderItem() {
        return columns.map( (item) => {
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

    const columnsEl = renderItem();
    return (
        <div className='col-title'>
            <ul className='col-title-ul col-ul'>
                {columnsEl}
            </ul>
        </div>
    )
};

export default ColTitle;
