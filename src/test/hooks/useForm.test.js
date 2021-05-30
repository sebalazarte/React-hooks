import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('UseForm', () => {

    const initialForm = {
        name: 'sebastian',
        email: 'sebalazarte@outlook.com'
    }

    test('debe regresar un formulario por defecto ', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe cambiar el valor del formulario (cambiar nombre)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        const target = {
            name: 'name',
            value: 'andres'
        }

        act(() =>{
            handleInputChange({target});
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'andres'});
    });

    test('debe restablecer el formulario cuando se hace reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        const target ={
            name: 'name',
            value: 'andres'
        }

        act(() => {
            handleInputChange({target});
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });

});