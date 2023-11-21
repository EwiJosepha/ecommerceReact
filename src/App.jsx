import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from './Components/Contactpage/Contact'
import Home from './Components/Homepage/Home'
import Details from './Components/Mealcards/Details';
import Mealcard from './Components/Mealcards/Mealcard';
import './App.css'

function App() {
  const client = new QueryClient();
  return (
    <>
    <QueryClientProvider client={client}>
  
    <Router>
     <Nav />
      <Routes>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Details" element={<Details />}/>
      </Routes>
    </Router>
    
    <Home />
    </QueryClientProvider>
    </>
  )
}

export default App
