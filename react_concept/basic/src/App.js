import React, { useState } from 'react';
import Counter from './Counter';
import ReturnComp from './ReturnComp';

export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <div>
      <Counter />
      <button style={{ backgroundColor: color }} onClick={onClick}>
        좋아요
      </button>
      <h3 style={{ borderTop: '3px solid #000' }}>반환값 영역</h3>
      <ReturnComp />
    </div>
  );
}
