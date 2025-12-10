

import './App.css'
import One from './One'
import Three from './Three'
import Two from './Two'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <>
    <DataProvider>
      <One />
      <Two />
      <Three />
    </DataProvider>
    </>
  )
}

export default App