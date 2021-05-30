import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd}) => {

    //el useForm es usado para acceder a los valores de los input del formulario
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAdd(newTodo);
        reset();

    }
    
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                    required
                />
                <button
                    className="btn btn-outline-primary btn-block mt-1"
                    type="submit">
                    Agregar
                </button>
            </form>
        </>
    )
}
