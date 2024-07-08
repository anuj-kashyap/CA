import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Hero from './Components/Hero'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Gst from './pages/Gst'

function App() {
  return (

      
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gst" element={<Gst/>}/>        
        </Routes>
        <Footer/>
      </Router>
      
  )
}

export default App