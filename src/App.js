
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(0)

  const [running, setRunning] = useState(false)

  useEffect(() => {
    let intervalId;
    if (running) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [running, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const startAndStop = () => {
    setRunning(!running)
  }

  const reset = () => {
    setTime(0)
  }


  return (
    <div className="stopwatch">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons" >
        <button className="stopwatch-button" onClick={startAndStop}>
          {running ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
