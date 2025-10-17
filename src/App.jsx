import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="heading_style">Current Time: {time}</h1>
    </div>
  );
}

export default App;
