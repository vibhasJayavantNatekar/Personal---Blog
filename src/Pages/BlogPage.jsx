import React from 'react'
import Sidebar from '../Components/Sidebar'
import './BlogPage.css'

const BlogPage = () => {
  return (

    <>
    <div className="section-wrapper">
        <div className="section-container">


         <div className="main-section">

          <div className="blgContainer">
            <div className="date-container">
                            <h5 className='date'  >20 July</h5>
                        </div>
                        <div className="title-container">
                            <h2 className="title">Leraning an Awt with node js</h2>
                        </div>
                        <div className="content-container">
                            
                        </div>
          </div>


          <Sidebar/>
         </div>


            

        </div>
    </div>
    
    </>
  )
}

export default BlogPage