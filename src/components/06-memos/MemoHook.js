import React, { useState, useMemo } from 'react'
import '../02-useEfect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { state: counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <hr />
            <h2>Counter: <small>{counter}</small> </h2>

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >+1</button>

            <button
                className="btn btn-outline-primary ml-5"
                onClick={() => setShow(!show)}
            >
                Show / Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
