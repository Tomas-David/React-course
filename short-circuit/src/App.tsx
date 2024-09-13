import './App.css'
import { Book } from './components/Book'
import { useState } from 'react'
function App() {

  const [show, setShow] = useState(false)

  return (
    <>
     <button onClick={() => setShow(!show)}>Skrýt/odkrýt</button>
     {show && <Book/>}
    </>
  )
}

export default App
