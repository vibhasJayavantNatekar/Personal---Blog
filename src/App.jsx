import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Project from './Pages/Projects'
import About from './Pages/About'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/projects' element={<Project />} />
          <Route path='about' element={<About />} />


        </Routes>

           <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
