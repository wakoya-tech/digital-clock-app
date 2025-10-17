import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let newTime= new Date().toLocaleTimeString();
  const [time,setTime]=useState(newTime);
  const updatedTime=()=>{
    let newTime =new Date().toLocaleTimeString();
    setTime(newTime)
  }
  setInterval(updatedTime,1000);
  return(
    <>
    <div className="container">
      <h1>Current Time: {time}</h1>
    </div>
    </>
  )
}

export default App
