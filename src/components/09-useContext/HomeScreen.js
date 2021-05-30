import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const userContext = useContext(UserContext);
    const {user} = userContext;

    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>
            <pre className="blockquote">
                {JSON.stringify(user, null, 3)}
            </pre>
            
        </div>
    )
}
