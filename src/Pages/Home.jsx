import React from 'react'
import './Home.css'
import BlogContainer from '../Components/BlogContainer'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div className="section-wrapper">
      <div className="section-container">


        <div className="hero-section">
          <h1 className="hero-section-title">Vibhas Natekar</h1>
          <p className="hero-section-des">
            Web Developer building clean, practical web applications. I share my work, technical insights, and experiences from real-world development.
          </p>
        </div>

        <div className="main-section">
          <BlogContainer />
          <Sidebar />
        </div>


      </div>
    </div>


  )
}

export default Home