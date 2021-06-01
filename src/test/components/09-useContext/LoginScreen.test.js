import React from 'react';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { mount } from 'enzyme';

describe('LoginScreen', () => {
    

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe ejecutar el setUser con el argumento esperado', () => {
        
        const user = {
            id: 123,
            name: 'Sebastian',
            email: 'sebalazarte@outlook.com'
        };

        // wrapper.find('button').prop('onClick')(); //es lo mismo
        wrapper.find('button').simulate('click');
        expect(setUser).toBeCalledWith(user);
    });

});