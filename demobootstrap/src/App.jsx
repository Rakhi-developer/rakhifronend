import { useState,useCallback} from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Navbar, Container, Nav } from 'react-bootstrap';
function App() {
  const [length,setlength]= useState(8)
  const [number, setnumber]=useState(false)
  const [charAllow,setcharAllow]=useState(false)
  const [password,setpassword]=useState("")
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let string="abcdefghijklmnopqrstuvwxyz"
    if(number) str+="1234567890"
    if(charAllow) str+="!@#$%^&*()[]{}~"
    for(let i=1;i<=Array.length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }
    setpassword(pass)


    ,[length,number,charAllow,setpassword]
  })

  return(

    <div className="w-full max-w-md mx-auto shadow
     rounded-lg px-4 my-8 text-orange-500
     ">
      <div className='text-white text-center my-3'>password Generator
      
      <div className="flex shadow rounded-lg
      overflow-hidden mb-4">
      <input type="text"
      value={password}
     placeholder='password'
     readOnly
     />
     <button className='text-white bg-primary px-3 py-1'>copy</button>
     </div>
     <div className='flex text-sm gap x-2'>
      <div className='flex items-center gap x-1'></div>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setcharAllow.length(e.target.value)}}
      />
      <label>Length:{setlength}</label>
     </div>
    </div>
    <input type="checkbox"
    defaultChecked={number}
    id="numberInput"
    onChange={()=>{
      setnumber((prev)=>!prev)
    }} />
    <label htmlFor="numberinput">number</label>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox'
      defaultChecked={charAllow}
      id='characterinput'
      onChange={()=>{
        setcharAllow((prev)=>!prev)
      }
      }
      />
      
    </div>
    </div>    
  );
}
export default App;
