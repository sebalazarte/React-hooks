import { shallow } from "enzyme";
import { HookApp } from "../HookApp";


describe('HookApp', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();

    });
});