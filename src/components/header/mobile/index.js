import React from 'react'
import './mobile.css'
import Project from '../images/ViewQuilt.png'
import Skills from '../images/Laptop.png'
import Work from '../images/Business.png'
import Contact from '../images/Contacts.png'
import Cancel from '../images/Delete.png'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                <img src={Cancel} alt="Cancel" width="24px" className="icon"/>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#projects">
                    <img src={Project} alt="Project" width="20px" className="icon"/>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                    <img src={Skills} alt="Skills" width="20px" className="icon"/>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                    <img src={Work} alt="Work" width="20px" className="icon"/>Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                    <img src={Contact} alt="Contact" width="20px" className="icon"/>Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
