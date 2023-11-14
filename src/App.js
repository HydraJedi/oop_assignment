import blob1 from "./blob1.svg";
import blob2 from "./blob2.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Resilience.io</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className="blob-container">
        <img src={blob1} className="blob1" alt="blob" />
        <img src={blob2} className="blob2" alt="blob" />
      </div>
      <div className="home-container">
        <p className="title">Recover from natural disasters</p>
        <p className="title">faster</p>
        <p className="desc-text">
          Introducing Resilience the app for natural disaster recovery.
          <br></br>Simplify challenges, progress, and recovery plans.
        </p>
      </div>
      <div className="btn-flex-box">
        <button className="button2">Learn More</button>

      <button className="button">Get Started</button>
      </div>
    </div>
  );
}

export default App;
