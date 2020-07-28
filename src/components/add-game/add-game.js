import React from "react";
import './add-game.scss'
import Input from "../input";
import Select from "../select";

const AddGame = ( { form:  {inputs, selects} } ) => {
    function renderElement(arr, TagName){
        return arr.map( (item) => {
            const {id} = item;
            return (
                <li
                    className='form-ul__li'
                    key={id}>
                    <TagName item={item}/>
                </li>
            )
        });
    }

    function onSubmit(e){
        e.preventDefault();
    }
    const elementInputs = renderElement(inputs, Input);
    const elementSelects = renderElement(selects, Select);

    return (
        <section className='add-game _bg-shadow'>
            <h5 className='add-game__title'>Add game to the list.</h5>

            <form
                onSubmit={(e) => onSubmit(e)}
                className='add-game__form add-form'>
                <ul className="add-form__ul form-ul">
                    {elementInputs}
                    {elementSelects}
                </ul>

                <button
                    type='submit'
                    className='btn btn-primary btn-sm'>
                    Add game
                </button>

            </form>
        </section>
    )
};

export default AddGame;
