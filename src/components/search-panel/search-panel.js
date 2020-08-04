import React, {Component} from "react";
import './search-panel.scss';

export default class SearchPanel extends Component{
    state = {
        patternStr: ''
    };

    patternStrChange(e) {
        e.preventDefault();
        const patternStr = e.target.value
            .trim()
            .toLowerCase();
        this.setState({patternStr});
        this.props.searchChange(patternStr);
    };

    render() {
        return (
            <form
                // onSubmit={ (e) => this.patternStrChange(e)}
                className='search-panel'>
                <input
                    onChange={ (e) => this.patternStrChange(e)}
                    name='search'
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
