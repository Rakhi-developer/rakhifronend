import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [students,setstudents]=useState([])
   useEffect(()=>{
    axios.get('/api/students')
    .then((response)=>{
      setstudents(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
   })
  return (
    <>
    <h1>Hello Friends</h1>
    <p>STUDENTS: {students.length}</p>

    {
  students.map((students, index) => (
    <div key={students.id}>
      <h3>{students.name}</h3>
      <p>{students.course}</p>
      <img src={students.imageURL}  />
    </div>
  ))
}

    </>
  )
}

export default App
