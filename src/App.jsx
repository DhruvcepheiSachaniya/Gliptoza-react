import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PdfViewer2 from './Components/Gliptozapdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PdfViewer2 />
    </>
  )
}

export default App
