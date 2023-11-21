import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Nav />
        <Route />
      </Routes>
    </Router>

    </>
  )
}

export default App
