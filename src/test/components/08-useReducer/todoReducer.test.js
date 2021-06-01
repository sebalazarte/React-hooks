import { todoRedurer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('todoReducer', () => {

    test('debe retornar el estado por defecto', () => {

        const state = todoRedurer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })

    test('debe agragar un nuevo todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const state = todoRedurer(demoTodos, {
            type: 'add',
            payload: newTodo
        });

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    })

    test('debe de borrar un todo ', () => {
        
        const state = todoRedurer(demoTodos, {
            type: 'delete',
            payload: 2
        });

        expect(state.length).toBe(1);
    });

    test('debe hacer el toogle del todo', () => {
        
        const state = todoRedurer(demoTodos, {
            type: 'toogle',
            payload: 2
        });

        expect(state[0]).toBe(demoTodos[0]);
        expect(state[1].done).toBe(true);

    });

    


});