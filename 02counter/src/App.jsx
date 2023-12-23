import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setcounter]=useState(15)

  // let counter = 15
    const addValue= () =>{
      console.log("clicked", counter)
      // counter=counter+1
      setcounter(prevcounter => prevcounter+1)   
      setcounter(prevcounter => prevcounter+1)
      setcounter(prevcounter => prevcounter+1)
      setcounter(prevcounter => prevcounter+1)

    }
    const removevalue=()=>{
      setcounter(counter-1)
    }
  
  return (
    <>
      <h1>chai or react</h1>
      <h2> counter value:{counter}</h2>
      <button onClick={addValue}
      >Add Value{counter}</button>
      <br/>
      <button
      onClick={removevalue}
      > remove value {counter}</button>
      <p>footer:{counter}</p>
                                     {/* ui updation ko react contral krte hai
                                     createroot method = dom like structure create krta hai 
                                      browser k pass dom hota h createroot bhi dom sturcture create krta hai 
                                       main dom or apne dom ko compair lrta hai or change krta hai
                                       browsre= pure dom ko remove krta hai or pure
                                       dom ko waps s reload krta hai is called page reload 
                                       What is reconciliation?
                                            reconciliation
                                            The algorithm React uses to diff one tree with another
                                            to determine which parts need to be changed.
                                            update
                                            A change in the data used to render a React app. Usually the result of `setState`.
                                            Eventually results in a re-render.
                                            Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
                                            A high-level description goes something like this: when you render a React application, 
                                            a tree of nodes that describes the app is generated and saved in memory.
                                             Diffing of lists is performed using keys.
                                              Keys should be "stable, predictable, and unique."
                                             virtual dom ko update kerti hai feact fibar 
                                             */}
                                             
                                          
    </>
  )
}

export default App
