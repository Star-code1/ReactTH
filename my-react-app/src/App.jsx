import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mycomponent from './components/Mycomponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        Hello world
        <Mycomponent></Mycomponent>
	</div>
      </>)
}


export default App
