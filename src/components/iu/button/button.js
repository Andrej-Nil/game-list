import React from "react";
import './button.scss'

const Button = ({text}) => {
    return(
        <button type='button' className='btn-iu btn btn-primary'>{text}</button>
    )
};
export default Button;
