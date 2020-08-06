import React from "react";
import './input.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = (props) => {
    const {type, label, value,
        onChange, errorMessage} = props;
    const cls = isInvalid(props) ? 'input-error' : null;
    const inputType = type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;
    return (
            <React.Fragment>
                <label
                    className={`form-ul-li__label ${cls}`}
                    htmlFor={htmlFor}>{label}</label>
                {
                    isInvalid(props)
                        ? <span className="form-ul-li__error">{errorMessage || 'Enter title game'}</span>
                        : null
                }

                <input
                    className='form-ul-li__input'
                    type={inputType}
                    id={htmlFor}
                    value={value}
                    onChange={onChange}
                />

            </React.Fragment>
    )
};

export default Input;
