import React from 'react'
import useToggle from '../hooks/use-Toggle';

const Person = () => {
    const [isHeartBroken, setIsHeartBroken] = useToggle(false);
    return (
        <h1 onClick={setIsHeartBroken} style={{ border: '2px solid black' }}>
            {isHeartBroken ? '💔' : '💚'}
      </h1>
    )
}

export default Person;