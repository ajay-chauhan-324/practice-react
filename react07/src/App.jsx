import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [time, settime] = useState(0);

  const uref = useRef(0);
  const cref = useRef();
  const start = () => {
    uref.current = setInterval(() => {
      settime((prev) => prev + 1);
    }, 1000);
    cref.current.hidden = true;
  };

  const stop = () => {
    clearInterval(uref.current);
    uref.current = 0;
    cref.current.hidden = false;
  };

  const restart = () => {
    stop();
    settime(0);
    cref.current.hidden = false;
  };

  return (
    <>
      <h1>stopwatch : {time} seconds</h1>
      <br />
      <br />
      <button ref={cref} onClick={start}>
        Start
      </button>
      <br />
      <br />
      <button onClick={stop}>Stop</button>
      <br />
      <br />
      <button onClick={restart}>re-start</button>
    </>
  );
}

export default App;
