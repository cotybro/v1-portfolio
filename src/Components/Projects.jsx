import React, { useEffect } from 'react'
import './Projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {
  useEffect(() => {
    AOS.init({ once: true, delay: 100 })
  }, [])
  return (
    <main>
      <div className='projects' id='projects'>
        <h2 className='projects-title'>Projects</h2>
        <p className='project-text'>
          I take pride in my portfolio of projects, and I'm excited to share
          some of my favorites with you! You'll find links to both the live
          versions and the code for each project, so you can see firsthand how I
          bring ideas to life.
        </p>
        <article
          className='project'
          data-aos='fade-right'
          data-aos-duration='1250'
        >
          <div className='img-container'>
            <img src='../assets/Pictures/420shots_so.png' alt='project' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Project 1</h3>
            <p className='project-info-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='button-container'>
              <a href='' target='_blank' className='btn'>
                Live Version
              </a>
              <a href='' target='_blank' className='btn'>
                Code
              </a>
            </div>
          </div>
        </article>
        <article
          className='project'
          data-aos='fade-left'
          data-aos-duration='1250'
        >
          <div className='img-container'>
            <img src='../assets/Pictures/420shots_so.png' alt='project' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Project 1</h3>
            <p className='project-info-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='button-container'>
              <a href='' target='_blank' className='btn'>
                Live Version
              </a>
              <a href='' target='_blank' className='btn'>
                Code
              </a>
            </div>
          </div>
        </article>
        <article
          className='project'
          data-aos='fade-right'
          data-aos-duration='1250'
        >
          <div className='img-container'>
            <img src='../assets/Pictures/420shots_so.png' alt='project' />
          </div>
          <div className='project-info'>
            <h3 className='project-title'>Project 1</h3>
            <p className='project-info-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='button-container'>
              <a href='' target='_blank' className='btn'>
                Live Version
              </a>
              <a href='' target='_blank' className='btn'>
                Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Projects
