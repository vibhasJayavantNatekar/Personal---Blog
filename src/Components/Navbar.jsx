import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaCross, FaHamburger } from 'react-icons/fa'
import { GiCancel, GiCrossMark, GiHamburger, GiHamburgerMenu } from 'react-icons/gi'
import { RiTreeLine } from 'react-icons/ri'
import { FcCancel } from 'react-icons/fc'
import { TiCancel, TiCancelOutline } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {

  const [isHamburger, setIsHamburger] = useState(true)

  return (


    <>
      <div className="nav-wrapper">
        <div className="nav-container">
          <h2 className="name-logo">Vibhas Natekar</h2>

           <ul className="nav-items">
            <NavLink to={'/'} > <li className="item">Home</li></NavLink>
            <NavLink to={'/projects'} > <li className="item">Projects</li></NavLink>
            <NavLink to={'/about'} ><li className="item">About Me</li></NavLink>
          </ul> 



          <div className="hamburger-menu">
             { isHamburger ?   <h2 onClick={()=> { setIsHamburger(false)}} ><GrClose/></h2> : <h2 onClick={ ()=> { setIsHamburger(true)}} ><GiHamburgerMenu /></h2> 

            
}

             { isHamburger && <ul className="hamburger-menu-nav-items">
              <NavLink to={'/'} > <li className="item">Home</li></NavLink>
              <NavLink to={'/projects'} > <li className="item">Projects</li></NavLink>
              <NavLink to={'/about'} ><li className="item">About Me</li></NavLink>
            </ul> 

             }

          </div>

        </div>


      </div>
    </>

  )
}

export default Navbar