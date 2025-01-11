import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tiem, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <h1 className="titl">01-Stopwatch</h1>
      <div className="time">
        <span>{("0" + (Math.floor(tiem / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(tiem / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(tiem / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn">
        {running ? (
          <button  className="btnn"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button className="btnn"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}
<button className="btnn" onClick={() => { 
  setTime(0); 
  setRunning(false); 
}}>Reset</button>

        {/* <button onClick={() => setRunning(0)}>Reset</button> */}
      </div>
    </>
  );
}

export default App;
