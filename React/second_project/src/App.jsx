import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let city="Kathmandu"
  let bums=[11,22,33]
  let age=15
  return (
    <>
   <h1> <p>I am from {city} </p>
    <p>lucky numbers {bums}</p>
    <p>{"true"}</p>
    <p>{JSON.stringify({name:"Rohit", age:40})}</p>
    <p>{age>=18 ? "ADULT" :"MINOR"}</p>
    </h1>
    
    
    
    </>
  )
}

export default App
