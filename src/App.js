import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Update from './components/update'
import Navbar from './components/navbar'
import { useState } from 'react'

function App({ onClick }) {
  //untuk mengecek btn di klik atau belum
  const [isDrakMode, setIsDrakMode] = useState(false)
  //fungsi btn darkmode
  const btnHandler = () => {
    setIsDrakMode(prevMode => !prevMode)
  }
  return (
    <Router>
      <Navbar onClick={btnHandler} isDrakMode={isDrakMode} />
      <Routes>
        <Route path='/' element={<Update />} />
      </Routes>
    </Router>
  )
}

export default App
