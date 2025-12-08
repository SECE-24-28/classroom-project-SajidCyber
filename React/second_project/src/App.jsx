import { useState } from 'react'
import './App.css'

function App() {

  let city = "Kathmandu";
  let bums = [11, 22, 33];
  let age = 15;

  let frnd=["smith","victor","Nelson","Mandora","SHURIYA"]
  let frnds=["ith","ctor","son","ora","IYA"]
  

  const [num, setNum] = useState(0);

  return (
    <>
      <h1>I am from {city}</h1>
      <p>Lucky numbers: {bums.join(", ")}</p>
      <p>{true ? "TRUE" : "FALSE"}</p>
      <p>{JSON.stringify({ name: "Rohit", age: 40 })}</p>
      <p>{age >= 18 ? "ADULT" : "MINOR"}</p>

      <h2>State value: {num}</h2>

      <button onClick={() => setNum(num + 1)}>
       +
      </button>
      <br />

      <button onClick={() => setNum(num - 1)}>
       -
      </button>
      {
        frnd.map((frnd)=>(
          <p> {frnd} </p>
        
        ))
      }
      {
        frnds.map((val,indx)=>(
          <p key = {indx}>{val}</p>
        ))
      }
    </>
  );
}

export default App;
