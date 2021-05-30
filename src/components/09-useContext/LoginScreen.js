import React, { useContext } from 'react';
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const userContext = useContext(UserContext);
    const { user, setUser } = userContext;

    const handleClick = () => {

        const newUser = {
            id: 123,
            name: 'Sebastian',
            email: 'sebalazarte@outlook.com'
        };

        setUser(newUser);
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleClick}
            >Login</button>

            <pre className="blockquote">
                {JSON.stringify(user, null, 3)}
            </pre>

        </div>
    )
}
