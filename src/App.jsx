import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnesSelector from './components/OnesSelector'
import DisplayScreen from './components/DisplayScreen'
import TensSelector from './components/TensSelector'

function App() {


  return (
    <div className="App">
      <DisplayScreen />
      <h1>How old are you ?</h1>
      <TensSelector/>
      <OnesSelector/>

      <button>Restart</button>
    </div>
  )
}

export default App
