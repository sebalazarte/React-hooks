import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, indice, handleToogle, handleDelete }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToogle(todo.id)}
            >
                {indice + 1}. {todo.desc}
            </p>
            <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.any.isRequired,
    indice: PropTypes.number.isRequired,
    handleToogle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}