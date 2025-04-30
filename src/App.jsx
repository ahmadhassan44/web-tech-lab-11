import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileEditor from './components/ProfileEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProfileEditor></ProfileEditor>
    </>
  )
}

export default App
