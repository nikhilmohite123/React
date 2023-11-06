import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return(
    <h1>good night</h1>
  )
}
// const ReactElement={
//   type :"a",
//   props:{
//       href:"https://www.google.com/",
//       target:"_blanck_"
//   },
//   children:"visit google"
// }

// in this format reander function take input .......bable work behind of all
const ReactElement=React.createElement(
  'a',
  { href:"https://www.google.com/",target:"_blank_"},
  "visit kar na bhai",
  "   meri jaan"
)

const nextelement=
  (
    <a href="https://www.google.com/">visit google</a>
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  

 <App/>
  
)
