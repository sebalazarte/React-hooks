import React, { useEffect, useState } from 'react';

export const Message = () => {


    const [cords, setCords] = useState({ x: 0, y: 0 })
    const {x, y } = cords;

    const mouseMove = (e) => {
        const cords = { x: e.x, y: e.y };
        setCords(cords);
    }

    useEffect(() => {
        console.log('componente montado');
        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>x: {x}, y: {y}</p>
        </div>
    )
}
