import React from 'react'
import ContactForm from './ContactForm'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <h1 className='about-title' id='about'>
        About Me
      </h1>
      <p className='about-text'>
        Based in Minnesota, USA, I am a passionate frontend developer who loves
        to turn concepts into reality through website development. My toolkit
        includes React JS, JavaScript, CSS, and Figma, which allow me to design
        and develop visually stunning and functional user interfaces that engage
        and delight visitors.
      </p>
      <div className='bottom-container'>
        <div className='contact'>
          <h2 className='contact-title'>Contact Me</h2>
          <ContactForm />
        </div>
        <div className='skills'>
          <h2 className='skills-title'>Skills</h2>
          <div className='skills-container'>
            <p className='skill'>HTML</p>
            <p className='skill'>CSS</p>
            <p className='skill'>JavaScript</p>
            <p className='skill'>React JS</p>
            <p className='skill'>Figma</p>
          </div>
          <div className='future-skills'>
            <h2 className='skills-title'>Future Skills</h2>
            <div className='skills-container'>
              <p className='skill'>React Redux</p>
              <p className='skill'>React Router</p>
              <p className='skill'>MUI</p>
              <p className='skill'>MongoDB</p>
              <p className='skill'>TailWind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
