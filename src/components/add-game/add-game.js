import React, {Component} from "react";
import './add-game.scss'
import Input from "../input";
import Select from "../select";
import {createControl} from '../../form/formFramework';

function createInput(label, errorMessage, id, validation, type = 'text') {

    return createControl( {type, label, errorMessage,
        value: '', id ,}, validation)
}

export default class AddGame extends Component {
    state = {
        isFormValid: false,
        formControlsInput: {
            titleGame: createInput(
                'Title game',
                'Enter the title game',
                'titleGame',
                {required: true, minLengthStr: 1,}),

            by: createInput(
                'By',
                'Enter the By',
                'by',
                {required: true, minLengthStr: 1,}),

            year: createInput(
                'Year',
                'Enter the year in 4 numbers',
                'year',
                {required: true, numStr: {lengthStr: 4, type: 'number',} }),
        },
        formControlsSelect: {
            genre: createControl({
                label: 'Select genre',
                id: 'selectGenre',
                value: 'action/RPG',
                options: [
                    {
                        option: 'action/RPG',
                    },
                    {
                        option:'action-adventure',
                    },
                    {
                        option: 'survival horror',
                    }
                ]
            }, null ),

            format: createControl({
                label: 'Select format',
                id: 'selectFormat',
                value: 'disk',
                options: [
                    {
                        option: 'disk'
                    },
                    {
                        option: 'hdd'
                    },
                    {
                        option: 'ps plus'
                    }
                ],
            }, null ),
        }
    };

    validateInput(value, validation) {
        if(!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.minLengthStr) {
            isValid = value.length >= validation.minLengthStr && isValid
        }

        if (validation.numStr) {
            isValid = value.length === validation.numStr.lengthStr && isValid;
            isValid = isNaN(+value) !== true && isValid;

        }
        return isValid
    }

    onChangeInput = (e, inputName) => {
        const formControlsInput = {...this.state.formControlsInput};
        const input = { ...formControlsInput[inputName]};
        input.value = e.target.value;
        input.touched = true;
        input.valid = this.validateInput(input.value, input.validation);
        console.log(input.value, input.valid)

        let isFormValid = true;

        formControlsInput[inputName] = input;

        Object.keys(formControlsInput).forEach(inputToCheck => {
            isFormValid = formControlsInput[inputToCheck].valid && isFormValid
        });


        this.setState({
            formControlsInput, isFormValid
        })
    };

    onChangeSelect = (e, selectName) => {
        const formControlsSelect = {...this.state.formControlsSelect};
        const input = { ...formControlsSelect[selectName]};
        input.value = e.target.value;

        formControlsSelect[selectName] = input;
        this.setState({
            formControlsSelect
        })
    };

    onSubmitForm(e) {
        e.preventDefault()
    }



    renderInputs() {
        return Object.keys(this.state.formControlsInput )
            .map( (InputsName) => {
                const input = this.state.formControlsInput[InputsName];
                const {type, value, valid, touched,
                    label, errorMessage, id, validation } = input;
                return (
                    <li key={id}
                        className='form-ul__li'>
                        <Input
                            type={type}
                            value={value}
                            valid={valid}
                            touched={touched}
                            label={label}
                            shouldValidate={!!validation}
                            errorMessage={errorMessage}
                            onChange={e => this.onChangeInput(e, InputsName)}
                        />
                    </li>
                )
            })
    }

    renderSelect () {
        const selects  = this.state.formControlsSelect;
        return Object.keys(selects).map( (selectName) => {
            const select = selects[selectName];
            const {label, value, id, options} = select;
            return (
                <li
                    key={id}
                    className='form-ul__li'>
                    <Select
                        label={label}
                        value={value}
                        options={options}
                        onChange={ e => this.onChangeSelect(e, selectName)}
                    />
                </li>
            )
        })
    }

    render() {
        const inputs = this.renderInputs();
        const selects = this.renderSelect();
        const { isFormValid } = this.state;
        return (
            <section className='add-game _bg-shadow'>
                <h5 className='add-game__title'>Add game to the list.</h5>

                <form
                    onSubmit={e => this.onSubmitForm(e)}
                    className='add-game__form add-form'>
                    <ul className="add-form__ul form-ul">
                        {inputs}
                        {selects}
                    </ul>
                    <button
                        disabled={!isFormValid}
                        type='submit'
                        className='btn btn-primary btn-sm'>
                        Add game
                    </button>

                </form
                    >
            </section>
        )
    }




};


