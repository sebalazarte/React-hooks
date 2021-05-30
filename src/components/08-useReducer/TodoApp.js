import React, { useReducer, useEffect } from 'react'
import './style.css';
import { todoRedurer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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

  

    //el efecto guarda en el localstorage cualquier cambio que tengan los todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) =>{
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToogle = (todoId) =>{
        dispatch({
            type: 'toogle',
            payload: todoId
        });
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>

            <h1>Todo App ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleToogle={handleToogle}
                        handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    )
}


