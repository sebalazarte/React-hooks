import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('HomeScreen', () => {

    const user = {
        name: 'sebastian',
        email: 'sebalazarte@outlook.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={user}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});