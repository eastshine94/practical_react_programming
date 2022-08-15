import { useState, useEffect } from 'react';

// export default function App() {
//   useEffect(() => {
//     window.onpopstate = event => {
//       console.log(`location: ${document.location}, state: ${event.state}`);
//     };
//   }, []);
//   return (
//     <div>
//       <button onClick={() => window.history.pushState('v1', '', '/page1')}>
//         page1
//       </button>
//       <button onClick={() => window.history.pushState('v2', '', '/page2')}>
//         page2
//       </button>
//     </div>
//   );
// }

export default function App() {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    window.onpopstate = event => {
      setPageName(event.state);
    };
  }, []);

  const onClick = event => {
    const { name } = event.currentTarget.dataset;
    window.history.pushState(name, '', `/${name}`);
    setPageName(name);
  };
  return (
    <div>
      <button data-name="page1" onClick={onClick}>
        page1
      </button>
      <button data-name="page2" onClick={onClick}>
        page2
      </button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Page1() {
  return <h2>여기는 Page1입니다.</h2>;
}
function Page2() {
  return <h2>여기는 Page2입니다.</h2>;
}
