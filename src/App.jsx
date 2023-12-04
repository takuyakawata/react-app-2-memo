import { useState } from 'react'
import { AcButton } from "./components/AcButton";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>hello world</h1>
      <div className="card">
        <AcButton onClick={() => setCount((count) => count + 3)}>
          count is {count}
        </AcButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
