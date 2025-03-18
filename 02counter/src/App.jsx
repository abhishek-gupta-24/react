import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0);

  const addvalue=()=>{
    if(counter<20){
      counter=counter+1;
      // console.log(counter);
       setCounter(counter);
       //setCounter(counter+1)=>this can also be used 
    }

  }
  const remvalue=()=>{
    if(counter>0){
      counter=counter-1;
      //console.log(counter);
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>ABHISHEK GUPTA</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={remvalue}>Remove value</button>
    </>
  )
}

export default App
