import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>  
    <h1>Hora</h1>
    <div className='bg-indigo-700'>{time}</div>
    </>
  )
}

export default Clock