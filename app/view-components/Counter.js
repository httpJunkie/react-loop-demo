
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click Me</button>
    </>
  )
}

export default Counter;