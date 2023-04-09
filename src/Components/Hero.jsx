import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero' id='home'>
      <div className='hero-container'>
        <h1 className='hero-title'>
          Hey, My Name Is <span>Coty Breault</span>
        </h1>
        <p className='hero-text'>
          As a frontend web developer, I thrive on the challenges of coding and
          turning ideas into reality. My favorite tool for this is React JS,
          which allows me to create beautiful and functional web applications.
        </p>
      </div>
    </div>
  )
}

export default Hero
