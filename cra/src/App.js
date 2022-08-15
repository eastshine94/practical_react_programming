import logo from './logo.svg';
import './App.css';
// import data from './data.json';
import SmallImg from './imgSmall.jpeg';
import BigImg from './imgBig.jpeg';

function App() {
  const handleClick = () => {
    import('./data.json').then(({ default: data }) => {
      console.log(data);
    });
  };

  console.log(process.env.NODE_ENV);
  // REACT_APP_API_URL=api.myapp.com npm start 로 start 시
  console.log(process.env.REACT_APP_API_URL);
  console.log(process.env.REACT_APP_TEMP);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <img src={BigImg} className="icon" alt="" />
          <img src={SmallImg} className="icon" alt="" />
        </div>
        <button onClick={handleClick}>데이터 보여주세요!!</button>
        <p>hello!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
