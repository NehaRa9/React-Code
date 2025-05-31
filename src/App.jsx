
import React, { useState ,useCallback,useEffect, useRef} from'react'


function App() {
const[length,setLength]=useState(6)
const[number,setNumber]= useState(false);
const[capticalchar,setCapticalchar]= useState(false);
const[smallchar,setSmallchar]= useState(false);
const[specialchar,setSpecialchar]= useState(false);
 const[password,setPassword]=useState("")
//ref hook
const passwordRef=useRef(null)

const copypassword = useCallback(()=>{
  passwordRef.current?.select();
 // passwordRef.current?.setSelectionRange(0,10);
   window.navigator.clipboard.writeText(password)
},[password])


const passwordGenerater = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHINJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*():"

  if(number) str+="0123456789"
  if(capticalchar) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(smallchar) str+="abcdefghijklmnopqrstuvwxyz"
  if(specialchar) str+="@#$%^&*{}:;<>?/"
  
  for(let i=1; i<=length; i++){
         // generate pasword
         let char = Math.floor(Math.random()* str.length+1)
         pass +=str.charAt(char)
}

setPassword(pass)
},[length,number,capticalchar,smallchar,specialchar,setPassword])

useEffect(()=>{
  passwordGenerater()
},[length,number,capticalchar,smallchar,specialchar,passwordGenerater])
  return (
    <>
      <div className='w-full max-w-3xl h-50 mx-auto shadow-md rounded-lg px-3 py-3 my-60  text-purple-500 bg-gray-900 text-center'>
        <h1 className='text-white text-center text-3xl font-bold italic '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-8'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copypassword} 
          className='text-black bg-blue-500 py-4 px-5 '>Copy</button>
        </div>

        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-3'>
          <input
          type='range'
          min={7}
          max={120}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>

        <div className='flex items-center gap-x-3 '>
          <input
          type='checkbox'
          value={number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label>Number</label>
        </div>

          <div className='flex items-center gap-x-3'>
          <input
          type='checkbox'
          value={capticalchar}
          id='capticalcharInput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label>Captical-Alphabet</label>
        </div>

         <div className='flex items-center gap-x-3'>
          <input
          type='checkbox'
          value={smallchar}
          id='smallcharInput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label>Small-Alphabet</label>
        </div>

          <div className='flex items-center gap-x-3'>
          <input
          type='checkbox'
          value={specialchar}
          id='specialcharInput'
          onChange={()=>{
            setNumber((prev)=>!prev);
          }}
          />
          <label>Special-Char</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App