import { useState } from 'react'

import './App.css'

function App() {
const [color,setcolor]=useState('black');

function seter(c_name){
  setcolor(c_name)
}
  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
     
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
    {/*here we also do  onclick={()=>seter('red')}  */}
<button onClick={()=>setcolor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}}>
  red
</button>


<button onClick={()=>setcolor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green"}}>
Green
</button>

<button onClick={()=>setcolor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"pink"}}>
  pink
</button>
<button onClick={()=>setcolor('yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"yellow"}}>
yellow
</button>
<button onClick={()=>setcolor('olive')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"olive"}}>
  olive
</button>
<button onClick={()=>setcolor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"orange"}}>
  orange
</button>
    </div>
    </div>

    </div>
    
  )
}

export default App
