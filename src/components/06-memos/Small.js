import React, {memo} from 'react'
//memo se usa para no volver a renderizar un componente si sus props no cambian
export const Small = memo(({value}) => {
    console.log('Me volvi a llamar :(');
    return (
        <small>{value}</small>
    )
})
