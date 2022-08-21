import { useState } from 'react';
import Title from './Title';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function onClick() {
    setCount(count + 1);
  }
  function onClick2() {
    setCount2(count2 + 1);
  }
  return (
    <div>
      <Title title={`현재 카운트1: ${count}`} />
      <button onClick={onClick}>증가</button>

      <p>{`현재 카운트2: ${count2}`}</p>
      <button onClick={onClick2}>증가</button>
    </div>
  );
}
