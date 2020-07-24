import React from "react";
import './button.scss'

const Button = ({type, text}) => {
    const typeBtm = type ? type : 'button';
    return(
        <button type={typeBtm} className='btn-iu btn btn-primary'>{text}</button>
    )
};
export default Button;
