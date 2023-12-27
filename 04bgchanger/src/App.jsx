import{ useState } from "react"

                                  
function App() {
  const [color, setcolor] = useState("green")

  return (
  <div className="w-full h-screen duration-200"
  style={{background:color}}
   >
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-warp justify-center
      gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl">
        <button 
        onclick={setcolor("Red")}
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >Red</button>
        <button 
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >red</button>
        <button 
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >green</button>
        <button 
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >blue</button>
        <button 
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >yellow</button>
        <button 
        className="outline-none px-4 py-1 rounded-full
        text-white shadow-lg"
        style={{backgroundcolor:"red"}}
        >pink</button>
      </div>
    </div>
  </div>
  )
}
// // Props stand for "Properties." They are read-only components. 
// It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. 
// It gives a way to pass data from one component to other components.
//  It is similar to function arguments.
// Props are passed to the component in the same way as arguments passed in a function.

// // Props are immutable so we cannot modify the props from inside the component. 
// // Inside the components, we can add attributes called props.
// //  These attributes are available in the component as this.props and can be used to render 
// //  dynamic data in our render method.

 
export default App
