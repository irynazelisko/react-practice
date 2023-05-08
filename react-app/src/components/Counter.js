import React, { useState } from 'react';

export function Counter() {
 const [value , setValue] = useState(0)

 function Increment() {
    setValue(value + 1);
 }

 function Decrement() {
    setValue(value - 1);
 }
 return (
    <div>
      <h1>Current count: {value}</h1>
      <button onClick={Increment}>Збільшити значення</button>
      <button onClick={Decrement}>Зменшити значення</button>
    </div>
  );
}