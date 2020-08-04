import React from "react";
import './select.scss'

const Select = ( {item: {label, options}}) => {
    function renderOptions() {
        return options.map( (item) => {
            const {option, id} = item;
            return (
                <option
                    key={id}
                    value={option}>
                    {option}
                </option>
            )
        });
    }

    const elementOptions = renderOptions();
    return (
        <React.Fragment>
            <label
                className='add-form__label'
            >
                {label}
            </label>
            <select
                className='add-form-select custom-select custom-select-sm'>
                {elementOptions}
            </select>
        </React.Fragment>
    )
};

export default Select
