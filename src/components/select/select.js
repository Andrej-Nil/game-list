import React from "react";
import './select.scss'

const Select = ( {label, options, onChange} ) => {
    function renderOptions() {
        return options.map( (item) => {
            const {option} = item;
            return (
                <option
                    key={option}
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
                className='add-form-select custom-select custom-select-sm'
                onChange={onChange}
            >

                {elementOptions}
            </select>
        </React.Fragment>
    )
};

export default Select
