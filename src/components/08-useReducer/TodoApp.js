import React, { useReducer, useEffect } from 'react'
import './style.css';
import { todoRedurer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoRedurer, initialState, init);
    //Al useRedurer se le puede pasar un estado incial o una funcion que carga el estado inicial
    //en este caso la funcion init trae el estado del localstorage
    const [todos, dispatch] = useReducer(todoRedurer, [], init);

    //el useForm es usado para acceder a los valores de los input del formulario
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    //el efecto guarda en el localstorage cualquier cambio que tengan los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>

            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">{i + 1}. {todo.desc}</p>
                                    <button className="btn btn-outline-danger" type="button">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
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

                </div>
            </div>
        </div>
    )
}


