import React, { useState } from 'react';
import Counter from './Counter';
import Profile from './Profile';
import ReturnComp from './ReturnComp';
import WidthPrinter from './WidthPrinter';

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

      <h3 style={{ borderTop: '3px solid #000' }}>custom hook 영역</h3>
      <div>
        <Profile userId={1} />
        <Profile userId={2} />
        <WidthPrinter />
      </div>
    </div>
  );
}
