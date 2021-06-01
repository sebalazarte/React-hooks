import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('TodoAdd', () => {

    const handleAdd = jest.fn();
    const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Al hacer submit del formulario no debe llamar al handleAdd ', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})

        expect(handleAdd).toHaveBeenCalledTimes(0);
    });

    test('debe llamar la funcion handleAdd', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});