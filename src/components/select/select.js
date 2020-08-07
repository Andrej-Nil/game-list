import React from "react";
import './select.scss'

const Select = ( {label, id, options, onChange} ) => {
    function renderOptions() {
        return options.map( (item) => {
            const {value, text} = item;
            return (
                <option
                    key={value}
                    value={value}>
                    {text}

                </option>
            )
        });
    }

    const elementOptions = renderOptions();
    return (
        <React.Fragment>
            <label htmlFor={id}
                className='add-form__label'
            >
                {label}
            </label>
            <select
                id={id}
                className='add-form-select custom-select custom-select-sm'
                onChange={onChange}
            >

                {elementOptions}
            </select>
        </React.Fragment>
    )
};

export default Select
