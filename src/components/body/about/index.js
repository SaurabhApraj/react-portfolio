import React from 'react'
import './about.css'
import Photo from '../images/undraw.png'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello, I am 
                    <br/><span className="info-name">Saurabh Apraj</span>
                </div>
                <div className="about-photo">
                    <img src={Photo} alt="pic" className="picture"/>
                </div>
            </div>
            <div className="about-bottom"></div>
        </div>
    )
}

export default About
