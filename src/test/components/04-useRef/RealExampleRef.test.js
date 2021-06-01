import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Real Example Ref', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrar correctamente el componente ', () => {
        
        expect(wrapper).toMatchSnapshot();       
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('debe mostrar el componente MultipleCustomHooks ', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })

});