import React from 'react';
import { act } from '@testing-library/react'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
const { shallow, mount } = require("enzyme");

describe('TodoApp', () => {

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(()=>{});

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe agregar un todo', () => {

        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');
        expect(localStorage.setItem).toBeCalledTimes(2);
    });

    test('debe eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);        
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
    });

});