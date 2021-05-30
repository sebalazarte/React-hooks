import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos = [], handleToogle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        todo={todo}
                        indice={i}
                        handleToogle={handleToogle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleToogle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

