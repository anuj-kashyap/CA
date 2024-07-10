import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Hero from './Components/Hero'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Gst from './pages/Gst'
import Services from './pages/Services'
import Ourteams from './pages/Ourteams'
import Aboutus from './pages/Aboutus'

function App() {
  return (

      
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/Gst" element={<Gst/>}/>    
        <Route path="/Services" element={<Services/>}/>
        <Route path='/Ourteams' element={<Ourteams/>}/>   
        </Routes>
        <Footer/>
      </Router>
      
  )
}

export default App