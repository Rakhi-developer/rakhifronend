import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
  username:"rakhi",
  age:21
  }
  return (
    <>
    <h1 className='bg -green-400 md-4'>TailWind Test</h1>
     <Card username="chai or code" btntext="click me"/>
     <Card username="rakhi" btntext="visit me"/>


    </>
  )
}

export default App
