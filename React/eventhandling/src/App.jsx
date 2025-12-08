import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let demo=(name)=>{
  console.log("hai"+ name)
 }

  return (
    <>
      <button onclick={()=>demo("BLACKYY")}>Click Me</button>
    </>
  )
}

export default App
