import React from 'react'
import { BiArrowToLeft } from 'react-icons/bi'
import { BsArrow90DegLeft, BsArrowDownUp } from 'react-icons/bs'
import { DiGithubAlt } from 'react-icons/di'
import { FaGithub } from 'react-icons/fa'
import Inventory  from '../assets/inventory.png'
import './Project.css'

const Projects = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-container">

          <div className="project-container">
            <h1>Frontend Projects</h1>

            <div className="project-cards">
              <div className="project-card">
                <img src={Inventory} alt="" className="project-img" />
                <h3 className="project-title">Inventory Management System</h3>
                <p className="project-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, architecto!</p>

                <div className="project-btn-container">
                  {/* <a href="#" className="btn-github"><FaGithub /> Github </a>
                  <a href="#" className="btn-live"> <BsArrowDownUp /> Live Demo </a> */}
                  <a href="#" class="btn-details">View Details</a>

                </div>
              </div>



               <div className="project-card">
                <img src={Inventory} alt="" className="project-img" />
                <h3 className="project-title">Inventory Management System</h3>
                <p className="project-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, architecto!</p>

                <div className="project-btn-container">
                  {/* <a href="#" className="btn-github"><FaGithub /> Github </a>
                  <a href="#" className="btn-live"> <BsArrowDownUp /> Live Demo </a> */}
                  <a href="#" class="btn-details">View Details</a>

                </div>
              </div>

               <div className="project-card">
                <img src={Inventory} alt="" className="project-img" />
                <h3 className="project-title">Inventory Management System</h3>
                <p className="project-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, architecto!</p>

                <div className="project-btn-container">
                  {/* <a href="#" className="btn-github"><FaGithub /> Github </a>
                  <a href="#" className="btn-live"> <BsArrowDownUp /> Live Demo </a> */}
                  <a href="#" class="btn-details">View Details</a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects