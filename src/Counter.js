import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCounter}>Erhöhen um 2</button>
    </div>
  );
}

