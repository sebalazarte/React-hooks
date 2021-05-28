import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';


export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <div>
            <h1>Counter with Hook {state}</h1>

            <button onClick={() => increment(2)} className="btn btn-warning">+1</button>
            <button onClick={() => reset()} className="btn btn-primary">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-danger">-1</button>
        </div>
    )
}
