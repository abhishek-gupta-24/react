import { useEffect, useState,useRef } from 'react'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed){
        str+="0123456789"
      }
      if(charAllowed){
        str+="!@#$%^&*(){}[]-_+=~<>:;`/\?|"
      }
      for(let i=1;i<=length;i++){
        let pos=Math.floor (Math.random()*str.length)
        pass+=str.charAt(pos)
      }
      setPassword(pass);
  },
  [length,numberAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  const passwordRef=useRef(null)
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,99)=> can be used for the rangeSelection
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto px-4 my-8 
      shadow-medium rounded-lg text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center pt-2 my-3'>Password Generator</h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
          <input 
           type="text"
           value={password}
           className='outline-none rounded-lg bg-white  my-4 w-full py-1 px-3 '
           placeholder='password'
           readOnly
           ref={passwordRef}
          >
          </input>
          <button 
          onClick={copyPasswordToClipBoard}
          className='outline-none rounded-md text-white px-3 my-4 bg-blue-700'
          >copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-3 my-2">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length:{length}</label>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label>Numbers</label>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label>Characters</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
