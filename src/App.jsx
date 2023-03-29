import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnesSelector from './components/OnesSelector'
import DisplayScreen from './components/DisplayScreen'
import TensSelector from './components/TensSelector'

function App() {


  const [firstDigit, setFirstDigit] = useState(1)
  const [secondDigit, setSecondDigit] = useState(2)

  return (
    <div className="App">
      <DisplayScreen firstDigit={firstDigit} 
      secondDigit={secondDigit} />
      <h1>How old are you ?</h1>
      <TensSelector 
       setFirstDigit={setFirstDigit}/>
      <OnesSelector 
      setSecondDigit={setSecondDigit}
      />
      <button>Convert Age 2 Days</button>
      <button>Restart</button>
    </div>
  )
}

export default App
