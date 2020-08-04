import React, {Component}  from 'react';
import './filret-genre.scss'

export default class FilterGenre extends Component{
    state =  {
        label: 'Select genre',
        options: [
            {value: 'all', label: 'all'},
            {value: 'action/RPG', label: 'action/RPG'},
            {value: 'action-adventure', label: 'action-adventure'},
            {value: 'survival horror', label: 'survival horror'},
        ]
    };

    renderOptions() {
        return this.state.options.map( ({value, label}) => {
            return (
                <option
                    key={value}
                    value={value}>
                    {label}
                </option>
            )
        })
    }
    render() {
        const {genreChange} = this.props;
        const {label} = this.state;
        const elementOptions = this.renderOptions();
        return (
            <React.Fragment>
                <label
                    className='add-form__label'
                >
                    {label}
                </label>
                <select
                    onChange={(e)=>genreChange(e)}
                    className='add-form-select custom-select custom-select-sm'>
                    {elementOptions}
                </select>
            </React.Fragment>
        )
    }
}
