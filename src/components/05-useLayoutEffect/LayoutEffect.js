import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const pTag = useRef();
    const { state: counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; //!!data retora true si es null, si tiene valor hace la siguiente instrucccion
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]) //si esta vacio se ejecuta solo la primera vez

    return (
        <div>
            <h1>Layout Effect</h1>

            <blockquote className="blockquote text-right">
                <p
                    ref={pTag}
                    className="mb-0"
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={() => increment(1)}>
                Siguiente quote
            </button>

        </div>
    )
}
