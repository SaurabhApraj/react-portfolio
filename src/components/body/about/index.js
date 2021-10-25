import React from 'react'
import './about.css'
import Photo from '../images/pic.jpg'
import SocialContact from '../../common/social-contact';

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
            <SocialContact/>
        </div>
    )
}

export default About
