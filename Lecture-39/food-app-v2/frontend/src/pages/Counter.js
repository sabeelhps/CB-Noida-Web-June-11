import React, { useCallback, useState } from 'react'
import Dummy from './Dummy';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCountHandler = () => {
    setCount(() => count + 1);
  }

  const sayHello = useCallback(() => {
    console.log('saying hello!');
  },[])

  return (
      <div style={{width:'200px', margin:'20px auto'}}>
      <h1>Counter : {count}</h1>
      <button onClick={incrementCountHandler}>+</button>
      <Dummy sayHello={sayHello} />
    </div>
  )
}

export default Counter;