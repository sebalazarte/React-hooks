import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter', () => {

    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe estar el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));

        expect(result.current.state).toBe(100);
    });

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        
        act(() => {
            increment();
        });

        const { state: counter } = result.current;
        expect(counter).toBe(101);
    });

    test('debe de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const { state: counter } = result.current;
        expect(counter).toBe(99);
    });

    test('debe de restablecerse el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment, reset } = result.current;

        act(() => {
            increment(5);
            reset();
        });

        const { state: counter } = result.current;
        expect(counter).toBe(100);
    });


});