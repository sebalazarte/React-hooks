import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('TodoListItem', () => {
    
    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]}
        indice={0}
        handleToogle={handleToogle}
        handleDelete={handleDelete}
    />);

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe llamar la funcion borrar', () => {
       
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe llamar la funcion toogle', () => {
        
        wrapper.find('p').simulate('click');
        expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    });


    test('debe terner la clase complete si done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(<TodoListItem
            todo={todo}
            indice={0}
            handleToogle={handleToogle}
            handleDelete={handleDelete}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

});