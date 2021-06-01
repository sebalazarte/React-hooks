import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";

describe('TodoList', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wrapper = shallow(<TodoList
        todos={demoTodos}
        handleToogle={handleToogle}
        handleDelete={handleDelete}
    />);

    test('debe mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot(); 
    });

    test('debe tener 2 <TodoListItem/>', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleToogle')).toEqual(expect.any(Function));
        
    });
    
});