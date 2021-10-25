import React from 'react'
import './web.css'
import Project from '../images/ViewQuilt.png'
import Skills from '../images/Laptop.png'
import Work from '../images/Business.png'
import Contact from '../images/Contacts.png'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <img src={Project} alt="Project" width="20px" className="icon"/>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <img src={Skills} alt="Skills" width="20px" className="icon"/>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <img src={Work} alt="Work" width="20px" className="icon"/>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <img src={Contact} alt="Contact" width="20px" className="icon"/>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
