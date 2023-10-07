import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}>

      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap bg-white rounded-3xl px-3 py-2 gap-3 shadow-lg justify-center">

            <button onClick={() =>setColor("red")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "red"}}>Red</button>
            <button onClick={() =>setColor("green")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "green"}}>Green</button>
            <button onClick={() =>setColor("blue")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "blue"}}>Blue</button>
            <button onClick={() =>setColor("orange")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "orange"}}>Orange</button>
            <button onClick={() =>setColor("pink")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "pink"}}>Pink</button>
            <button onClick={() =>setColor("black")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "black"}}>Black</button>
            <button onClick={() =>setColor("brown")} className="px-4 py-1 shadow-lg rounded-full text-white outline-none" style={{backgroundColor : "brown"}}>Brown</button>

            

        </div>
      
      
      </div>
    

    </div>
  )
}

export default App;
