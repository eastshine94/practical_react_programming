export default function Header() {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">
          132<div className="score-addition">+132</div>
        </div>
        <div className="best-container">1440</div>
      </div>
    </div>
  );
}
