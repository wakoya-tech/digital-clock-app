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
}

export default App
