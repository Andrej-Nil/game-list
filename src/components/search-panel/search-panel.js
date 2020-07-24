import React, {Component} from "react";
import './search-panel.scss';
import Button from "../iu/button";

export default class SearchPanel extends Component{
    state = {
        term: ''
    };
    onTern(e){
        const term = e.target.value;
        this.setState({
            term
        })
    }

    onSearchValue() {
        this.props.onSearchChange(this.state.term)
    }


    render() {
        const {term} = this.state;
        return (
            <form onSubmit={() => this.onSearchValue()} className='search-panel'>
                <input
                    value={term}
                    onChange={(e) => this.onTern(e)}
                    type='text'
                    placeholder='Find game'
                    className='form-control search-input search-panel__input'
                />
                <Button type='submit' text={'Search'} />


            </form>

        )
    }
}
