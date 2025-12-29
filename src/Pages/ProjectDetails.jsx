import React from 'react'
import Inventory from '../assets/inventory.png'
import './Project-details.css'

const ProjectDetails = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-container">

          <div className="project-details">
            <div className="project-name">
              <h1>PortFolio Website</h1>
            </div>

            <div className="technologies-used">
              <ul className="technology-list">
                <li className="technology-list-item">React JS </li>
                <li className="technology-list-item">Node Js </li>
                <li className="technology-list-item">MongoDB </li>
                <li className="technology-list-item">Express Js</li>

              </ul>
            </div>

            <div className="project_image">
              <img src={<Inventory />} width={400} height={100} alt="" />
            </div>

            <div className="overview">
              <h2>Project Overview</h2>
              <p>The Modern Portfolio Website is a sleek and responsive web template built using HTML, CSS, and JavaScript. It features a clean layout with smooth scroll effects, section-based navigation, and a modern design that highlights your personal brand and professional projects.
              </p>
              <p>  This project is ideal for students, developers, or designers who want to create an impressive online presence. With sections like About, Projects, Skills, and Contact, it’s fully customizable and easy to update with your own content.</p>



            </div>

            
            <div className="technologies">

              <h2>Technologies Used</h2>
              <ul>
                <li >React JS </li>
                <li >Node Js </li>
                <li >MongoDB </li>
                <li >Express Js</li>

              </ul>
            </div>



          </div>

        </div>
      </div>

    </>
  )
}

export default ProjectDetails