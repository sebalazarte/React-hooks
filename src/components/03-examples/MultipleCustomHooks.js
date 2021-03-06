import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import '../02-useEfect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {


    const {state: counter, increment} = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0]; //!!data retora true si es null, si tiene valor hace la siguiente instrucccion

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>
                Siguiente quote
            </button>

        </div>
    )
}
