import React, {Component} from "react";
import './add-game.scss'
import Input from "../input";
import Select from "../select";
import {createControl, validate, validateForm} from '../../form/formFramework';
import Server from "../../server";

function createControlsInput() {
    return {
        titleGame: createControl(
            {
                label: 'Title game',
                errorMessage: 'Enter the title game',
                id: 'titleGame',
                value: '',
            },
            {required: true, minLengthStr: 1,}),
        by: createControl(
            {
                label: 'By',
                errorMessage: 'Enter the by',
                id: 'by',
                value: '',
            },
            {required: true, minLengthStr: 1,}),
        year: createControl(
            {
                label: 'Year',
                errorMessage: 'Enter the year in 4 numbers',
                id: 'year',
                value: '',
            },
            {required: true, numStr: {lengthStr: 4, type: 'number'}}),
    };
}

function createControlsSelect() {
    return {
        genre: createControl({
            label: 'Select genre',
            id: 'selectGenre',
            value: 'action/RPG',

            options: [
                {
                    value: 'action/RPG',
                    text: 'action/RPG'
                },
                {
                    value: 'action-adventure',
                    text: 'action-adventure'
                },
                {
                    value: 'survival horror',
                    text: 'survival horror'
                }
            ]
        }, null ),

        format: createControl({
            label: 'Select format',
            id: 'selectFormat',
            value: 'disk',
            options: [
                {
                    value: 'disk',
                    text: 'disk'
                },
                {
                    value: 'hdd',
                    text: 'hdd'
                },
                {
                    value: 'psPlus',
                    text: 'ps plus'
                }
            ],
        }, null ),
    }
}


export default class AddGame extends Component {
    server = new Server();
    state = {
        games: [],
        counter: 0,
        isFormValid: false,
        formControlsInput: createControlsInput(),
        formControlsSelect: createControlsSelect(),
    };

    onChangeInput = (e, inputName) => {
        const formControlsInput = {...this.state.formControlsInput};
        const input = { ...formControlsInput[inputName]};
        input.value = e.target.value;
        input.touched = true;
        input.valid = validate(input.value, input.validation);

        formControlsInput[inputName] = input;

        this.setState({
            formControlsInput, isFormValid: validateForm(formControlsInput)
        })
    };

    onChangeSelect = (e, selectName) => {
        const formControlsSelect = {...this.state.formControlsSelect};
        const select = { ...formControlsSelect[selectName]};
        select.value = e.target.value;

        formControlsSelect[selectName] = select;
        this.setState({
            formControlsSelect
        });
    };
    async componentDidMount() {
        try{
            const counter = await this.server.getCounter();
            this.setState({
                counter
            })
        } catch (e) {
            console.log(e)
        }
    }

    async createNewGame(e) {
        e.preventDefault();
        const counter = this.state.counter + 1;
        const id = ('' + counter).length < 2 ? `game0${counter}` : `game${counter}`;

        const {formControlsInput, formControlsSelect} = this.state;
        const { addNewGame } = this.props;

        const newGame = {
            title: formControlsInput.titleGame.value,
            by: formControlsInput.by.value,
            genre: formControlsSelect.genre.value,
            year: formControlsInput.year.value,
            format: formControlsSelect.format.value,
            isPlayed: 'noPlayed',
            id,

        };

        newGame.keyGame = await this.server.postGame(newGame);
        addNewGame(newGame);
        this.server.updateCounter(counter);

        this.setState({
            counter,
            isFormValid: false,
            formControlsInput: createControlsInput(),
            formControlsSelect: createControlsSelect(),
        })
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
                        id={id}
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
                    onSubmit={e => this.createNewGame(e)}
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


