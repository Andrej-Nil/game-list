import React from "react";
import './input.scss'

const Input = ({ item: { type, placeholder, name} }) => {

    return (
            <input
                className='form-control form-control-sm
                form-ul-li__input'
                name={name}
                type={type}
                placeholder={placeholder}
            />
    )
};

export default Input;
