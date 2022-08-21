import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

export default function ReturnComp() {
  // return "안녕하세요";
  // return 123;
  // return [<p key="a">안녕하세요</p>, <p key="b">반갑습니다</p>];
  return (
    <>
      <Title title="안녕하세요" />
      {null}
      {false}

      {ReactDOM.createPortal(
        <div>
          <h4>portal 영역</h4>
          <p>실전 리액트 프로그래밍 입니다</p>
        </div>,
        document.getElementById('something')
      )}
    </>
  );
}
