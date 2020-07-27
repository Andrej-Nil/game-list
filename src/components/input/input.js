import React from "react";
import './input.scss'

const Input = ({label, type, placeholder}) => {
    return (
        <React.Fragment>
            <label className='add-form__label'>test</label>
            <input
                className='form-control form-control-sm add-form__input'
                type='text'
                placeholder='test'
            />
        </React.Fragment>
    )
};

export default Input;
