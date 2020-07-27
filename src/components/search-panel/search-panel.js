import React, {Component} from "react";
import './search-panel.scss';

export default class SearchPanel extends Component{
    state = {
        term: ''
    };
    render() {
        return (
            <form className='search-panel'>
                <input
                    placeholder='Find game'
                    className='form-control search-panel__input'
                />
                <button
                    className='btn ml-2 btn-outline-success my-2 my-sm-0'
                    type="submit"
                >Search</button>
            </form>

        )
    }
}
