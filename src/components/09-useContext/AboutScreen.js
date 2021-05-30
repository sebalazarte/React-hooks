import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const userContext = useContext(UserContext);
    const { user, setUser } = userContext;

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr />
            <pre className="blockquote">
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleClick}
            >Logout</button>
        </div>
    )
}
