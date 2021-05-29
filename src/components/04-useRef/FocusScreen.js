import React, {useRef} from 'react'
import '../02-useEfect/effects.css';



export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        // document.querySelector('input').focus();
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button 
                className="btn btn-outline-primary mt-2"
                onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
