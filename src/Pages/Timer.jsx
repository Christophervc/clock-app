import { useState, useRef, useEffect } from 'react';
const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleChange = (setter) => (event) => {
    const value = Number(event.target.value);
    if(value>= 0 ){
      setter(value);
    }

  };

  const startTimer = () => {
    if (!isRunning) {
      const totalTime = hours * 3600 + minutes * 60 + seconds;
      setTimeLeft(totalTime);
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            alert("Time's up!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTimeLeft(0);
  };

  const formatTime = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
    <h2>Temporizador</h2>
      <div className="input-fields">
        <input type="number" value={hours} onChange={handleChange(setHours)} placeholder="Hours" />
        <input type="number" value={minutes} onChange={handleChange(setMinutes)} placeholder="Minutes" />
        <input type="number" value={seconds} onChange={handleChange(setSeconds)} placeholder="Seconds" />
      </div>
      <div className="time">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Restart</button>
      </div>
    </>
  )
}

export default Timer