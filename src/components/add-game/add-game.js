import React from "react";
import './add-game.scss'
import Input from "../input";

const AddGame = (props) => {
    return (
        <section className='add-game _shadow'>
            <h5 className='add-game__title'>Add game to the list.</h5>

            <form className='add-game__form add-form'>
                <Input />
                <Input />
                <Input />
            </form>
        </section>
    )
};

export default AddGame;
