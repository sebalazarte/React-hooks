import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('AppRouter', () => {

    const user = {
        id: 123,
        name: 'Sebastian',
        email: 'sebalazarte@outlook.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});