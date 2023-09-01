import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import AboutClass from './components/AboutClass'

function App() {
  const [count, setCount] = useState(0)

  return (
   // <AboutClass name = "Srinithi" work = "Student" />
   <AboutClass/>
  )
}

export default App
