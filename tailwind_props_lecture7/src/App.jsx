

import Card from '../component/card'
import './App.css'

function App() {
 let myobj={
 name:"nikhil",
  age :21
 }
 let arry=[1,2,3,4,5]

  return (
 <>
<Card  userName="nikhil" information={arry}/>


 </>
  )
}

export default App
