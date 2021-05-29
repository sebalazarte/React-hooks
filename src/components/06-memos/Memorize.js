import React, {useState} from 'react'
import '../02-useEfect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const{state: counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h2>Counter: <Small value={counter}/></h2>

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
