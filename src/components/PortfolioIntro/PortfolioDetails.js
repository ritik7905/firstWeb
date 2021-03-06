import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';
// styles
import "./Details.scss"
import { useSelector } from 'react-redux';

const PortfolioDetails = (props) => {
  const projects = useSelector((state) => state.projects)
  console.log(projects);
  const id = useParams()
  // const { title } = projects[id];
  

  return (
    <div className='project-datails-section'>
      <div className="project-details container">
        <h6 className="title app__flex"><ArrowLeftOutlined /><Link to="/" className='back-link'>BACK TO PORTFOLIO</Link></h6>
        <h1 className="title1">ghghdhg</h1>
        <h5 className="sub-title title">Agency provides a full service range including technical skills, design, business understanding.</h5>
        <p className="description">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
        <div className="project-info">
          <div className='info_data'>
            <div className="category">
              <h6 className="title">CATEGORY</h6>
              <ul className="lists">
                <li>Art Direction</li>
                <li>User Interface</li>
                <li>Branding Strategy</li>
                <li>Print Design</li>
                <li>3D Render</li>
              </ul>
            </div>

            <div className="clients">
              <h6 className="title">CLIENTS</h6>
              <div className="client-details">
                <div className="company-logo">
                  <img src="" alt="Loading..." />
                </div>
                <h6 className="title date">DATE</h6>
                <span>Dec 2021</span>

              </div>
            </div>
          </div>
        </div>
        <div className="project-thumbnail">
          <img src="" alt="Loading...." />
        </div>

        <div className="problem">
          <h2 className="title">Problem</h2>
          <p className="description para-1">
            Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
          <p className="description para-2">
            A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          <div className="project-imgs">

          </div>
        </div>
        <div className="solution">
          <h2 className="title">Solution</h2>
          <p className="description para-1">
            Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
          </p>
          <p className="description para-2">
            Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          <div className="social-links">
            <span className="title">SHARE ON</span>
            <ul className="lists container">
              <li className="facebook"></li>
              <li className="twitter"></li>
              <li className="instagram"></li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )

}

export default PortfolioDetails