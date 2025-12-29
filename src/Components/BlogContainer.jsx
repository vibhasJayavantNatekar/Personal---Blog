import React from 'react'
import './BlogContainer.css'
import BlogPage from '../Pages/BlogPage'
import { Link } from 'react-router-dom'



const BlogContainer = () => {



    return (
        <>
            <div className="blog-wrapper">
                <div className="blog-container">
                    <div className="blog-card">
                        <div className="date-container">
                            <h5 className='date'  >20 July</h5>
                        </div>
                        <div className="title-container">
                            <h2 className="title">Leraning an Awt with node js</h2>
                        </div>
                        <div className="content-container">
                            <p className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti minus dolores dolorum aliquam iure cupiditate quia ducimus dignissimos tempore molestias?
                            </p>
                        </div>
                        <div className="btn-container">
                            <Link to={''}> <a className='more-btn'>Read More </a></Link>
                        </div>
                    </div>

                     
                      <div className="blog-card">
                        <div className="date-container">
                            <h5 className='date'  >20 July</h5>
                        </div>
                        <div className="title-container">
                            <h2 className="title">Leraning an Awt with node js</h2>
                        </div>
                        <div className="content-container">
                            <p className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti minus dolores dolorum aliquam iure cupiditate quia ducimus dignissimos tempore molestias?
                            </p>
                        </div>
                        <div className="btn-container">
                            <a href="#" className='more-btn'>Read More </a>
                        </div>
                    </div>

                    


                </div>
            </div>
        </>
    )
}

export default BlogContainer